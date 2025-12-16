import { useState } from "react";
import { Handle, Position } from "reactflow";
import { FileInput } from "lucide-react";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Number");

  return (
    <BaseNode
      headerColor="#059669"
      borderColor="#19a38cff"
      icon={<FileInput />}
    >
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
          <option>Text</option>
          <option>Number</option>
          <option>File</option>
        </select>
      </div>

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
    </BaseNode>
  );
};
