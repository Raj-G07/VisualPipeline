import { useState } from "react";
import { Handle, Position } from "reactflow";
import { Globe } from 'lucide-react';
import { BaseNode } from "./baseNode";

export const ApiCallNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("apiCall-", "apiCall_")
  );
  const [inputType, setInputType] = useState(data?.inputType || "Get");

  return (
    <BaseNode
      id={id}
      headerColor="#05968aff"
      borderColor="#1970a3ff"
      icon={<Globe />}
    >
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 11, opacity: 0.8 }}>URL</label>
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
        <label style={{ fontSize: 11, opacity: 0.8 }}>Method</label>
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
          <option value="Get">Get</option>
          <option value="Post">Post</option>
          <option value="Delete">Delete</option>
          <option value="Put">Put</option>
        </select>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          background: "#60f0faff",
          width: 10,
          height: 10,
          border: "2px solid #096b6eff",
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{
          background: "#60f0faff",
          width: 10,
          height: 10,
          border: "2px solid #096b6eff",
        }}
      />
    </BaseNode>
  );
};
