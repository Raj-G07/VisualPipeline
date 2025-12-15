// toolbar.js

import { DraggableNode } from "./draggableNode";

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

      <div
        style={{
          fontSize: 14,
          fontWeight: 600,
          marginBottom: 6,
        }}
      >
        Nodes
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
        <DraggableNode type="customInput" label="Input" description={"Define an input variable"} color="#059669" />
        <DraggableNode type="llm" label="LLM" description={"Run an LLM"} color="#2563eb" />
        <DraggableNode type="text" label="Text" description={"Add text content"} color="#f59e0b" />
        <DraggableNode type="customOutput" label="Output" description={"Define an output variable"} color="#7c3aed" />
      </div>
    </div>
  );
};
