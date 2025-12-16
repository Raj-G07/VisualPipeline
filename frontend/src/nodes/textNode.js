import { useState } from "react";
import { Handle, Position } from "reactflow";
import { FileTypeCorner } from "lucide-react";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  return (
    <BaseNode
      id={id}
      headerColor="#f59e0b"
      borderColor="#aab921ff"
      icon={<FileTypeCorner />}
    >
      <label style={{ fontSize: 11, opacity: 0.8, marginBottom: 4 }}>
        Text
      </label>
      <textarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        rows={3}
        style={{
            width: "90%",
            resize: "none",
            padding: "8px",
            borderRadius: 6,
            background: "#020617",
            border: "1px solid rgba(148, 163, 184, 0.5)",
            color: "#e5e7eb",
            fontSize: 12,
            lineHeight: 1.4,
          }}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{
          background: "#f59e0b",
          width: 10,
          height: 10,
          border: "2px solid #92400e",
        }}
      />
    </BaseNode>
  );
};
