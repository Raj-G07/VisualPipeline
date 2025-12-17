import { useState } from "react";
import { Network } from "lucide-react";

export const FlippingNetworkIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: "2rem",
        height: "2rem",
        perspective: "1000px",
        backgroundColor: "transparent",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: hovered ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <Network
            style={{
              width: "2rem",
              height: "2rem",
              color: "rgb(59,130,246)",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            fontWeight: 900,
            fontSize: "1.5em",
          }}
        >
          <Network
            style={{
              width: "2rem",
              height: "2rem",
              color: "rgb(59,130,246)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
