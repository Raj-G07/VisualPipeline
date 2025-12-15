// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div  style={{
        width: 240,
        background: "#0f172a",
        borderRadius: 10,
        border: "1px solid #1e293b",
        boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
      }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          top: "35%",
          background: "#60a5fa",
          width: 10,
          height: 10,
          border: "2px solid #1e3a8a",
        }}
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
      <div style={{
          background: "#2563eb",
          padding: "10px 12px",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          fontWeight: 600,
          fontSize: 14,
        }}>
        <span>LLM</span>
      <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.9 }}>
        <span>Large Language Model</span>
      </div>
      </div>

      <div style={{ padding: 12 }}>
        {/* Model */}
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontSize: 11, opacity: 0.8 }}>Model</label>
          <select
            defaultValue="GPT-4"
            style={{
              width: "100%",
              marginTop: 4,
              padding: "6px 8px",
              borderRadius: 6,
              background: "#020617",
              border: "1px solid #1e293b",
              color: "#e5e7eb",
              fontSize: 12,
            }}
          >
            <option>GPT-4</option>
            <option>GPT-3.5</option>
            <option>Claude</option>
          </select>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          background: "#22c55e",
          width: 10,
          height: 10,
          border: "2px solid #064e3b",
        }}
      />
    </div>
  );
}
