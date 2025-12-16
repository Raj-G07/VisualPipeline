import { useState } from "react";

export const BaseNode = ({
  headerColor,
  borderColor,
  icon,
  children,
  width = 240,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width,
        background: "#30384bff",
        borderRadius: 10,
        border: `1px solid ${borderColor}`,
        boxShadow: hovered
          ? "0 0 0 2px rgba(59,130,246,0.35)"
          : "0 10px 28px rgba(0,0,0,0.45)",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
        transition: "box-shadow 250ms ease, border-color 300ms ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: headerColor,
          padding: "10px 12px",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          fontWeight: 600,
          fontSize: 14,
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        {icon}
      </div>

      {/* Body */}
      <div style={{ padding: 12 }}>{children}</div>
    </div>
  );
};
