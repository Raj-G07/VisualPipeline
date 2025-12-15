import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { Network } from "lucide-react";
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
        <div style={{
          display: "flex",
          gap: 1
        }}>
      <div
        style={{
          width: "4rem", // w-16
          height: "4rem", // h-16
          borderRadius: "1rem", // rounded-2xl
          background: "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(32, 10, 83, 0.1))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        <Network
          style={{
            width: "2rem", // w-8
            height: "2rem", // h-8
            color: "rgb(59,130,246)", // text-primary
          }}
        />
      </div>
      <div style={{ marginLeft: 10, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 25,
            fontWeight: 600 }}>
            VectorShift Studio
          </div>
          <div style={{ fontSize: 13, opacity: 0.7 }}>
            Visual Pipeline Builder
          </div>
      </div>
        </div>

        <SubmitButton />
      </header>

      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <aside
          style={{
            width: 260,
            borderRight: "1px solid #1e293b",
            background: "#020617",
          }}
        >
          <PipelineToolbar />
        </aside>

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
