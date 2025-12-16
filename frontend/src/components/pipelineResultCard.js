import { useEffect, useState } from "react";
import { CircleX,Network } from 'lucide-react';

export const PipelineResultOverlay = ({ result, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (result) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [result]);

  if (!result) return null;

  const success = result.is_dag && !result.errors;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(6, 15, 49, 0.55)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 400,
          padding: 18,
          borderRadius: 16,
          background:
            "linear-gradient(135deg, rgba(41,87,161,0.25), rgba(25,7,70,0.18))",
            border: `1px solid ${
            success ? "rgba(34,197,94,0.6)" : "rgba(239,68,68,0.6)"
          }`,
          boxShadow: "0 30px 60px rgba(0,0,0,0.55)",
          color: "#e5e7eb",
          fontFamily: "Inter, sans-serif",

          /* 🔥 Animation */
          transform: visible
            ? "translateY(0) scale(1)"
            : "translateY(-40px) scale(0.96)",
          opacity: visible ? 1 : 0,
          transition:
            "transform 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 12,
          }}
        >
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: success ? "#22c55e" : "#ef4444",
                display: "flex",
                alignItems: "center",
                gap: 8,
            }}
          >
         <Network
          style={{
            width: "2rem",
            height: "2rem", 
            color: success ? "#22c55e" : "#ef4444",
          }}
           />
            {success ? "Pipeline Validated" : "Pipeline Error"}
          </div>

          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "none",
              color: "#94a3b8",
              cursor: "pointer",
              fontSize: 16,
            }}
          >
            <CircleX />
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
            marginBottom: 12,
          }}
        >
          <Stat label="Nodes" success={success} value={result.num_nodes} />
          <Stat label="Edges" success={success} value={result.num_edges} />
          <Stat label="DAG" success={success} value={result.is_dag ? "Yes" : "No"} />
        </div>

        {/* Message */}
        {result.message && (
          <div
            style={{
              fontSize: 13,
              opacity: 0.9,
              lineHeight: 1.5,
            }}
          >
            {result.message}
          </div>
        )}

        {/* Errors */}
        {result.errors && (
          <div
            style={{
              marginTop: 12,
              padding: 10,
              borderRadius: 8,
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.4)",
              fontSize: 12,
              color: "#fecaca",
            }}
          >
            {Array.isArray(result.errors)
              ? result.errors.map((e, i) => <div key={i}>• {e}</div>)
              : result.errors}
          </div>
        )}
      </div>
    </div>
  );
};

const Stat = ({ label, value,success }) => (
  <div
    style={{
      textAlign: "center",
      padding: "8px 6px",
      borderRadius: 8,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(148,163,184,0.25)",
    }}
  >
    <div style={{
        fontSize: 22,
        fontWeight: 600,
        color:  success ? "#22c55e" : "#ef4444",
        lineHeight: 1,
    }}>{value}</div>
    <div 
    style={{
        marginTop: 6,
        fontSize: 11,
        color: "#e5eaf1ff",
      }}
      >{label}</div>
  </div>
);
