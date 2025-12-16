import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { Network } from "lucide-react";
import { useState } from "react";
import { PipelineResultOverlay } from "./components/pipelineResultCard";
function App() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
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
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 1,
          }}
        >
          <div
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "1rem",
              background:
                "linear-gradient(135deg, rgba(41, 87, 161, 0.2), rgba(32, 10, 83, 0.1))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
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
              marginLeft: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 25, fontWeight: 600 }}>
              VectorShift Studio
            </div>
            <div style={{ fontSize: 13, opacity: 0.7 }}>
              Visual Pipeline Builder
            </div>
          </div>
        </div>
        <SubmitButton setResult={setResult} setError={setError} />
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
          }}
        >
          <PipelineToolbar />
        </aside>

        <div
          style={{
            flex: 1,
          }}
        >
          <PipelineUI />
        </div>
      </div>
      <PipelineResultOverlay
        result={result}
        error={error}
        onClose={() => {
          setResult(null);
          setError(null);
        }}
      />
    </div>
  );
}

export default App;
