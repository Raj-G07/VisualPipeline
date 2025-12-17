import { Handle, Position } from "reactflow";
import { Merge } from 'lucide-react';
import { BaseNode } from "./baseNode";
import { useState } from "react";

export const ConditionalNode = ({ id , data }) => {
    const [currName, setCurrName] = useState(
    data?.inputName || ""
  );
  return (
    <BaseNode
      id={id}
      headerColor="#eb2535ff"
      icon={<Merge/>}
    >
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 11, opacity: 0.8 }}>Condition</label>
        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="e.g., value > 10"
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

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{
          background: "#c53440ff",
          width: 10,
          height: 10,
          border: "2px solid #d1162fff",
           top: "35%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: "60%",
          background: "#c53440ff",
          width: 10,
          height: 10,
          border: "2px solid #d1162fff",
        }}
      />
    </BaseNode>
  );
};
