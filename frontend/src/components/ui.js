// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "../nodes/inputNode";
import { LLMNode } from "../nodes/llmNode";
import { OutputNode } from "../nodes/outputNode";
import { TextNode } from "../nodes/textNode";
import { MergeNode } from "../nodes/mergeNode";
import { TransformNode } from "../nodes/transformNode";
import { FilterNode } from "../nodes/filterNode";
import { ApiCallNode } from "../nodes/apiCallNode";
import { ConditionalNode } from "../nodes/conditionalNode";
import "reactflow/dist/style.css";
import { CustomEdge } from "../edges/customEdges";
import { EdgeDefs } from "../utils/svgDef";
import { EmptyPipelineState } from "./emptyPipelineState";
const gridSize = 20;
const proOptions = { hideAttribution: true };
export const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  merge: MergeNode,
  transform: TransformNode,
  filter: FilterNode,
  apiCall: ApiCallNode,
  conditional: ConditionalNode,
};

const edgeTypes = {
  custom: CustomEdge,
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
  const edgeOption = {
    animated: true,
    style: {
      strokeWidth: 2,
      strokeDasharray: "6 6",
      stroke: "url(#edge-gradient)",
    },
  };
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    let nodeData = { id: nodeID, nodeType: `${type}` };
    return nodeData;
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      if (event?.dataTransfer?.getData("application/reactflow")) {
        const appData = JSON.parse(
          event.dataTransfer.getData("application/reactflow")
        );
        const type = appData?.nodeType;

        if (typeof type === "undefined" || !type) {
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
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <>
      <div
        ref={reactFlowWrapper}
        style={{
          width: "100%",
          height: "100%",
          background: "#020617",
          borderTop: "1px solid #1e293b",
          position: "relative",
        }}
      >
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
          edgeTypes={edgeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
          minZoom={0.4}
          maxZoom={1.5}
          defaultEdgeOptions={edgeOption}
          fitView
          style={{ background: "#020617" }}
          deleteKeyCode={["Backspace", "Delete"]}
        >
          <svg>
            <EdgeDefs />
          </svg>
          <Background
            variant="dots"
            color="#4a525fff"
            size={1}
            gap={gridSize}
          />
          <Controls
            showZoom={true}
            showFitView={true}
            showInteractive={false}
            style={{
              background: "#020617",
              border: "1px solid #1e293b",
              borderRadius: 12,
              overflow: "hidden",
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
        {nodes.length === 0 && <EmptyPipelineState />}
      </div>
    </>
  );
};
