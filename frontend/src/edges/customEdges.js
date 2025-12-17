import { getBezierPath } from "reactflow";
import { useStore } from "../components/store";

export const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  selected,
}) => {
  const deleteEdges = useStore((s) => s.deleteEdges);

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <path
        id={id}
        d={edgePath}
        stroke="#60a5fa"
        stroke="url(#edge-gradient)"
        markerEnd="url(#edge-arrow-chevron)"
        strokeWidth={selected ? 3 : 2}
        opacity={selected ? 1 : 0.85}
        fill="none"
        style={{
          transition: "stroke-width 150ms ease, opacity 150ms ease",
        }}
      />
      <foreignObject
        width={20}
        height={20}
        x={(sourceX + targetX) / 2 - 10}
        y={(sourceY + targetY) / 2 - 10}
      >
        <button
          onClick={() => deleteEdges(id)}
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(135deg, #f00000, #dc281e)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </foreignObject>
    </>
  );
};
