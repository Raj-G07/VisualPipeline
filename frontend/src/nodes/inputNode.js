import { useState } from "react";
import { Handle, Position } from "reactflow";
import { FileInput } from "lucide-react";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Number");
  return (
    <div
      style={{
        width: 240,
        background: "#30384bff",
        borderRadius: 10,
        boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
        border: "1px solid #19a38cff",
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
        <FileInput/>
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
              background: "#030614ff",
              border: "1px solid rgba(148, 163, 184, 0.5)",
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
              border: "1px solid rgba(148, 163, 184, 0.5)",
              color: "#e5e7eb",
              fontSize: 12,
              transition: "border-color 150ms ease"
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
