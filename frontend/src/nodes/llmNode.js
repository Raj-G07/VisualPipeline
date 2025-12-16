import { Handle, Position } from "reactflow";
import { Bot } from "lucide-react";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      headerColor="#2563eb"
      borderColor="#305facff"
      icon={<Bot />}
    >
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 11, opacity: 0.8 }}>Model</label>
        <select style={{
              width: "100%",
              marginTop: 4,
              padding: "6px 8px",
              borderRadius: 6,
              background: "#020617",
              border: "1px solid rgba(148, 163, 184, 0.5)",
              color: "#e5e7eb",
              fontSize: 12,
            }} defaultValue="GPT-4">
          <option value="GPT-4">GPT-4</option>
          <option value="GPT-3.5">GPT-3.5</option>
          <option value="Claude">Claude</option>
        </select>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          background: "#60a5fa",
          width: 10,
          height: 10,
          border: "2px solid #1e3a8a",
           top: "35%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: "60%",
          background: "#60a5fa",
          width: 10,
          height: 10,
          border: "2px solid #1e3a8a",
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          background: "#60a5fa",
          width: 10,
          height: 10,
          border: "2px solid #1e3a8a",
        }}
      />
    </BaseNode>
  );
};
