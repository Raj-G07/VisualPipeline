import { useState } from "react";
import { useStore } from "../store";
import {Play,Loader} from "lucide-react";

export const SubmitButton = ({setResult, setError }) => {
  const { nodes, edges } = useStore((s) => ({
    nodes: s.nodes,
    edges: s.edges,
  }));

  const [loading, setLoading] = useState(false);

  const isDisabled =
    nodes.length === 0 ||
    (nodes.length > 1 && edges.length === 0);

  const submitPipeline = async () => {
    if (isDisabled) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!res.ok) {
        throw new Error("Pipeline validation failed");
      }

      const data = await res.json();
      setResult(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "12px",
    }}
    >
      <button
        onClick={submitPipeline}
        disabled={isDisabled}
        style={{
          padding: "10px 18px",
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 0.3,
          display: "flex",
          alignItems: "center",
          background: isDisabled
          ? "#1e293b"
            : "linear-gradient(135deg, #2563eb, #4f46e5)",
            
          color: isDisabled ? "#64748b" : "#ffffff",

          border: isDisabled
          ? "1px solid #334155"
            : "1px solid rgba(99,102,241,0.6)",
            
            boxShadow: isDisabled
            ? "none"
            : "0 10px 24px rgba(37,99,235,0.35)",
            
            cursor: isDisabled ? "not-allowed" : "pointer",
            
            transition:
            "background 150ms ease, box-shadow 150ms ease, transform 100ms ease",
          }}
          onMouseDown={(e) => {
            if (!isDisabled) e.currentTarget.style.transform = "scale(0.97)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {loading ? 
        <Loader style={{
        width: "2.7rem",
        height: "1rem",
        animation: "spin 1s linear infinite",
         }} /> 
         : 
         <>
         <Play style={{ width: "1rem", height: "1rem", margin: "0 8px 0 0" }} /> 
         Run
         </>}
      </button>
    </div>
  </>
  );
};
