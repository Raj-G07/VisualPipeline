import { useState } from "react";
import { Handle, Position } from "reactflow";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Number");

  return (
    <div
      style={{
        width: 210,
        background: "#0f172a",
        borderRadius: 10,
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        border: "1px solid #1e293b",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          background: "#059669",
          padding: "10px 12px",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        Input
        <div style={{ fontSize: 11, fontWeight: 400, opacity: 0.9 }}>
          Define an input variable
        </div>
      </div>

      <div style={{ padding: 12 }}>
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontSize: 11, opacity: 0.8 }}>Name</label>
          <input
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              width: "90%",
              marginTop: 3,
              padding: "6px 8px",
              borderRadius: 6,
              background: "#020617",
              border: "1px solid #1e293b",
              color: "#e5e7eb",
              fontSize: 12,
            }}
          />
        </div>

        <div>
          <label style={{ fontSize: 11, opacity: 0.8 }}>Type</label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
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
            <option value="Text">Text</option>
            <option value="Number">Number</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{
          background: "#22c55e",
          width: 10,
          height: 10,
          border: "2px solid #064e3b",
        }}
      />
    </div>
  );
};
