import { useStore } from "../store";
import { shallow } from "zustand/shallow";

export const PipelineOverview = () => {
  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  return (
    <div
      style={{
        background: "#020617",
        padding: "10px",
        borderRadius: 10,
        width: 210,
        boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
      }}
    >
     
      {/* Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
        }}
      >
        <StatCard label="Nodes" value={nodes.length} />
        <StatCard label="Edges" value={edges.length} />
      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div
    style={{
      background: "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(32, 10, 83, 0.1))",
      border: "1px solid #1e293b",
      borderRadius: 10,
      padding: "12px 10px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: "#1659e0ff",
        lineHeight: 1,
      }}
    >
      {value}
    </div>
    <div
      style={{
        marginTop: 6,
        fontSize: 11,
        color: "#94a3b8",
      }}
    >
      {label}
    </div>
  </div>
);
