import { Handle, Position } from "reactflow";
import { GitMerge } from 'lucide-react';
import { BaseNode } from "./baseNode";
import { useState } from "react";

export const MergeNode = ({ id , data }) => {
    const [currName, setCurrName] = useState(
    data?.inputName || ""
  );
  return (
    <BaseNode
      id={id}
      headerColor="#e525ebff"
      icon={<GitMerge/>}
    >
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 11, opacity: 0.8 }}>Seperator</label>
        <input
          value={currName}
          onChange={(e) => setCurrName(e.target.value)}
          placeholder="Enter separator"
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
          background: "#fa60faff",
          width: 10,
          height: 10,
          border: "2px solid #8a1e61ff",
           top: "35%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          top: "60%",
          background: "#fa60faff",
          width: 10,
          height: 10,
          border: "2px solid #8a1e61ff",
        }}
      />
    </BaseNode>
  );
};
