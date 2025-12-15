// textNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div  style={{
        width: 260,
        background: "#0f172a",
        borderRadius: 10,
        border: "1px solid #1e293b",
        boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
      }}>
      <div style={{
          background: "#f59e0b",
          padding: "10px 12px",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          fontWeight: 600,
          fontSize: 14,
          color: "#e5e7eb",
        }}
        >
        <span>Text</span>
        <div
          style={{
            fontSize: 11,
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          Use {"{variable}"} syntax for dynamic inputs
        </div>
      </div>

      <div style={{ padding: 12 }}>
        <label  
        style={{
            fontSize: 11,
            opacity: 0.8,
            display: "block",
            marginBottom: 4,
          }}>
          Text
          </label>

          <textarea 
            value={currText} 
            onChange={handleTextChange} 
            placeholder="Enter text or use {{variables}}"
            rows={3}
            style={{
            width: "90%",
            resize: "none",
            padding: "8px",
            borderRadius: 6,
            background: "#020617",
            border: "1px solid #1e293b",
            color: "#e5e7eb",
            fontSize: 12,
            lineHeight: 1.4,
          }}
          />
      </div>
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
    </div>
  );
}
