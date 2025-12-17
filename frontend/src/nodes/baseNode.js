import { useState } from "react";
import { useStore } from "../store";
import { CircleX } from "lucide-react";
import "../index.css";
export const BaseNode = ({ id, headerColor, icon, children, width = 240 }) => {
  const [hovered, setHovered] = useState(false);
  const deleteNode = useStore((s) => s.deleteNode);

  return (
    /* card (outer gradient + glow) */
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width,
        padding: 2,
        borderRadius: 20,
        background: "linear-gradient(163deg, #00ff75 0%, #3700ff 100%)",
        transition: "all 0.3s ease",
        boxShadow: hovered ? "0px 0px 30px 1px rgba(0, 255, 117, 0.3)" : "none",
      }}
    >
      <div
        style={{
          background: "#30384bff",
          borderRadius: hovered ? 20 : 18,
          transform: hovered ? "scale(0.98)" : "scale(1)",
          transition: "all 0.2s ease",
          color: "#e5e7eb",
          fontFamily: "Inter, sans-serif",
          boxShadow: hovered
            ? "0 0 0 2px rgba(59,130,246,0.35)"
            : "0 10px 28px rgba(0,0,0,0.45)",
        }}
      >
        <div
          style={{
            background: headerColor,
            padding: "10px 12px",
            borderTopLeftRadius: hovered ? 20 : 18,
            borderTopRightRadius: hovered ? 20 : 18,
            fontWeight: 600,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 6,
          }}
        >
          <div>{icon}</div>

          <button
            onClick={() => deleteNode(id)}
            className="press-btn"
          >
            <CircleX />
          </button>
        </div>

        <div style={{ padding: 12 }}>{children}</div>
      </div>
    </div>
  );
};
