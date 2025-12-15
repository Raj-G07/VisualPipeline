// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { FileOutput } from 'lucide-react';
export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div 
    style={{
        width: 240,
        background: "#30384bff",
        borderRadius: 10,
        border: "1px solid #b2c0d6ff",
        boxShadow: "0 10px 28px rgba(0,0,0,0.45)",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
      }}
      >
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
      <div 
      style={{
          background: "#7c3aed",
          padding: "10px 12px",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          fontWeight: 600,
          fontSize: 14,
        }}>
       <FileOutput/>
      </div>

      
      {/* Body */}
      <div style={{ padding: 12 }}>
        {/* Name */}
        <div style={{ marginBottom: 10 }}>
          <label style={{ fontSize: 11, opacity: 0.8 }}>Name</label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            style={{
              width: "90%",
              marginTop: 4,
              padding: "6px 8px",
              borderRadius: 6,
              background: "#020617",
              border: "1px solid #1e293b",
              color: "#e5e7eb",
              fontSize: 12,
            }}
          />
        </div>

        {/* Type */}
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
              border: "1px solid #1e293b",
              color: "#e5e7eb",
              fontSize: 12,
            }}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </div>
  );
}
