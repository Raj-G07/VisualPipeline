// toolbar.js

import { PipelineOverview } from "./components/pipelineOverview";
import { DraggableNode } from "./draggableNode";
import { Library,Activity } from 'lucide-react';
import { FileTypeCorner, Bot ,FileOutput, FileInput } from "lucide-react";
export const PipelineToolbar = () => {
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
        Node Library
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
        style={{
          display: "grid",
          gap: 10,
        }}
      >
        <DraggableNode type="customInput" label="Input" Icon={FileInput} description={"Define an input variable"} color="#059669" />
        <DraggableNode type="llm" label="LLM" Icon={Bot} description={"Run an LLM"} color="#2563eb" />
        <DraggableNode type="text" label="Text" Icon={FileTypeCorner} description={"Add text content"} color="#f59e0b" />
        <DraggableNode type="customOutput" label="Output" Icon={FileOutput} description={"Define an output variable"} color="#7c3aed" />
      </div>
    </div>
  );
};
