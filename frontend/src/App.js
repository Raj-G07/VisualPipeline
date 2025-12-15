import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        background: "#020617",
        color: "#e5e7eb",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: 80,
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #1e293b",
          background: "#020617",
        }}
      >
        <div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>
            VectorShift Pipeline Builder
          </div>
          <div style={{ fontSize: 12, opacity: 0.7 }}>
            Create and connect nodes to build your workflow
          </div>
        </div>

        {/* Submit Button (Top Right) */}
        <SubmitButton />
      </header>

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            width: 260,
            borderRight: "1px solid #1e293b",
            background: "#020617",
          }}
        >
          <PipelineToolbar />
        </aside>

        {/* Canvas */}
        <div
          style={{
            flex: 1,
            background: "#020617",
          }}
        >
          <PipelineUI />
        </div>
      </div>
    </div>
  );
}

export default App;
