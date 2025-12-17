import { useState, useRef, useEffect, useMemo } from "react";
import { Handle, Position } from "reactflow";
import { FileTypeCorner } from "lucide-react";
import { BaseNode } from "./baseNode";

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "");
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [currText]);

  const variables = useMemo(() => {
    const found = new Set();
    let match;

    while ((match = VARIABLE_REGEX.exec(currText)) !== null) {
      found.add(match[1]);
    }

    return Array.from(found);
  }, [currText]);

  return (
    <BaseNode id={id} headerColor="#f59e0b" icon={<FileTypeCorner />}>
      <label style={{ fontSize: 11, opacity: 0.8, marginBottom: 4 }}>
        Text
      </label>
      <textarea
        ref={textareaRef}
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        placeholder="Use {{ variables }} here"
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
      {variables.map((variable, index) => {
        const topPercent = ((index + 1) / (variables.length + 1)) * 100;
        return (<Handle
          key={variable}
          type="source"
          position={Position.Right}
          id={`${id}-${variable}`}
          style={{
            top: `${topPercent}%`,
            background: "#f59e0b",
            width: 10,
            height: 10,
            border: "2px solid #92400e",
            transform: "translateY(-50%)",
          }}
        />
)})}
    </BaseNode>
  );
};
