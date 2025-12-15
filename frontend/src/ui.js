// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap} from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { Network } from 'lucide-react';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <>
        <div ref={reactFlowWrapper} style={{
        width: "100%",
        height: "100%",
        background: "#020617",
        borderTop: "1px solid #1e293b",
        position: "relative",
      }}>
        <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType='smoothstep'
                minZoom={0.4}
                maxZoom={1.5}
                fitView
                style={{ background: "#020617" }}
         >
          <Background variant="dots" color="#d2dae7ff" size={1} gap={gridSize} />
           <Controls 
           showZoom={true}
           showFitView={true}
           showInteractive={false}
           style={{
            background: "#020617",
            border: "1px solid #1e293b",
            borderRadius: 12,
            overflow: "hidden"
           }}
           />
           <MiniMap  
           nodeColor={() => "#334155"}
           maskColor="rgba(83, 90, 124, 0.6)"
          style={{
            backgroundColor: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: 8,
          }}
          />
            </ReactFlow>
          {nodes.length === 0 && (
       <div
       style={{
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
    }}
  >
    <div
      style={{
        textAlign: "center",
        maxWidth: "28rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem", 
      }}
    >
      <div
        style={{
          width: "4rem", 
          height: "4rem", 
          borderRadius: "1rem", 
          background: "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(32, 10, 83, 0.1))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Network
          style={{
            width: "2rem", 
            height: "2rem", 
            color: "rgb(59,130,246)", 
          }}
        />
      </div>

      <h3
        style={{
          fontSize: "1.125rem",
          fontWeight: 600,
          background: "linear-gradient(to right, #e5e7eb, #9ca3af)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Start Building Your Pipeline
      </h3>

      <p
        style={{
          fontSize: "0.875rem", 
          color: "#9ca3af", 
          lineHeight: 1.6, 
        }}
      >
        Select nodes from the sidebar to begin creating your workflow.
        Connect them together to build complex data pipelines.
      </p>
    </div>
     </div>
    )}
        </div>
        </>
    )
}
