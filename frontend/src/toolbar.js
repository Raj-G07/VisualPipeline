// toolbar.js

import { PipelineOverview } from "./components/pipelineOverview";
import { DraggableNode } from "./components/draggableNode";
import { Library,Activity } from 'lucide-react';
import { FileTypeCorner, Bot ,FileOutput, FileInput,GitMerge,Cog,Funnel,Globe } from "lucide-react";
import { nodeTypes } from "./ui";
export const PipelineToolbar = () => {
  
  const length = nodeTypes ? Object.keys(nodeTypes).length : 0;
  return (
    <div
      style={{
        width: "100vh%",
        height: "30vh",
        background: "#020617",
        borderRight: "1px solid #1e293b",
        padding: "16px 14px",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div style={{
        display: "grid"
      }}>
       <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 6,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Activity style={{ width: "1rem", height: "1rem", margin: "0 8px 0 0",color: "#3b82f6" }}/>
        Pipeline Overview
      </div>
      <div
        style={{
          fontSize: 11,
          opacity: 0.7,
          marginBottom: 14,
        }}
      >
      Current pipeline composition at a glance
      </div>
        <PipelineOverview/>
      </div>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid #1e293b",
          margin: "12px 0",
        }}
      />
      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 6,
          display: "flex",
          alignItems: "center"
        }}
      >
        <Library style={{ width: "1rem", height: "1rem", margin: "0 8px 0 0" ,color: "#3b82f6"}}/>
        <div style={{ display: "flex" , alignItems: "center", gap: 21}}>
        Node Library 
        <div style={{
          border: "1px solid rgba(148,163,184,0.5)",
          borderRadius: 6,
          padding: "2px 6px",
          fontSize: 12,
          marginLeft: 6,
          background: "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(25, 7, 70, 0.1))",
        }}>{length} types</div>
        </div>
      </div>

      <div
        style={{
          fontSize: 11,
          opacity: 0.7,
          marginBottom: 14,
        }}
      >
        Drag and drop to build pipeline
      </div>
      <div
      className="pipeline-scroll"
      style={{     
       height: "calc(100vh - 310px)",
       overflowY: "auto",
       paddingRight: 6,
       background: "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(25, 7, 70, 0.1))",
       border: "1px solid rgba(148,163,184,0.25)",
       borderRadius: 12,
       boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.03)",    
       }}
       >
      <div
        style={{
          display: "grid",
          padding: 2,
          gap: 10,
        }}
        >
        <DraggableNode type="apiCall" label="API Call" Icon={Globe} description={"Make an external API call"} color="#05968aff" />
        <DraggableNode type="filter" label="Filter" Icon={Funnel} description={"Filter data based on condition"} color="#965205ff" />
        <DraggableNode type="customInput" label="Input" Icon={FileInput} description={"Define an input variable"} color="#059669" />
        <DraggableNode type="llm" label="LLM" Icon={Bot} description={"Run an LLM"} color="#2563eb" />
        <DraggableNode type="merge" label="Merge" Icon={GitMerge} description={"Merge multiple inputs"} color="#e525eb" />  
        <DraggableNode type="customOutput" label="Output" Icon={FileOutput} description={"Define an output variable"} color="#7c3aed" />
        <DraggableNode type="text" label="Text" Icon={FileTypeCorner} description={"Add text content"} color="#f59e0b" />
        <DraggableNode type="transform" label="Transform" Icon={Cog} description={"Transform data using an LLM"} color="#eb2556" />
        </div>
        </div>
    </div>
  );
};
