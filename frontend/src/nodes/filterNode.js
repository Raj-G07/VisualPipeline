import { useState } from "react";
import { Handle, Position } from "reactflow";
import { Funnel } from 'lucide-react';
import { BaseNode } from "./baseNode";

export const FilterNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("filter-", "filter_")
  );

  return (
    <BaseNode
      id={id}
      headerColor="#965205ff"
      icon={<Funnel />}
    >
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 11, opacity: 0.8 }}>Condition</label>
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

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        style={{
          background: "#c59122ff",
          width: 10,
          height: 10,
          border: "2px solid #b3650bff",
        }}
      />
       <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          background: "#c59122ff",
          width: 10,
          height: 10,
          border: "2px solid #b3650bff",
        }}
      />
    </BaseNode>
  );
};
