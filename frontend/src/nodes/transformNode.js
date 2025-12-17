import { Handle, Position } from "reactflow";
import { Cog } from "lucide-react";
import { BaseNode } from "./baseNode";

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      headerColor="#eb2556ff"
      icon={<Cog />}
    >
      <div style={{ marginBottom: 10 }}>
        <label style={{ fontSize: 11, opacity: 0.8 }}>Operation</label>
        <select 
        style={{
              width: "100%",
              marginTop: 4,
              padding: "6px 8px",
              borderRadius: 6,
              background: "#020617",
              border: "1px solid rgba(148, 163, 184, 0.5)",
              color: "#e5e7eb",
              fontSize: 12,
            }} defaultValue="UpperCase">
          <option value="UpperCase">UpperCase</option>
          <option value="LowerCase">LowerCase</option>
          <option value="Trim">Trim</option>
        </select>
      </div>
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{
          background: "#fa608eff",
          width: 10,
          height: 10,
          border: "2px solid #94175cff",
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{
          background: "#fa608eff",
          width: 10,
          height: 10,
          border: "2px solid #94175cff",
        }}
      />
    </BaseNode>
  );
};
