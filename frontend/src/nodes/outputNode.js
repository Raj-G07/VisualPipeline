import { useState } from "react";
import { Handle, Position } from "reactflow";
import { FileOutput } from "lucide-react";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || ""
  );
  const [outputType, setOutputType] = useState(data?.outputType || "Text");

  return (
    <BaseNode
      id={id}
      headerColor="#7c3aed"
      icon={<FileOutput />}
    >
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 11, opacity: 0.8 }}>Name</label>
        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="output_name"
          style={{
              width: "90%",
              marginTop: 4,
              padding: "6px 8px",
              borderRadius: 6,
              background: "#020617",
              border: "1px solid rgba(148, 163, 184, 0.5)",
              color: "#e5e7eb",
              fontSize: 12,
            }}
        />
      </div>

      <div>
        <label style={{ fontSize: 11, opacity: 0.8 }}>Type</label>
        <select
          value={outputType}
          onChange={(e) => setOutputType(e.target.value)}
          style={{
              width: "100%",
              marginTop: 4,
              padding: "6px 8px",
              borderRadius: 6,
              background: "#020617",
              border: "1px solid rgba(148, 163, 184, 0.5)",
              color: "#e5e7eb",
              fontSize: 12,
            }}
        >
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        style={{
          background: "#7c3aed",
          width: 10,
          height: 10,
          border: "2px solid #433855ff",
        }}
      />
    </BaseNode>
  );
};
