// submit.js
import { fakeNodes, fakeEdges } from "./mocks/pipelineDagIsFalse";

export const SubmitButton = () => {

async function submitFakePipeline() {
try {
    const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nodes: fakeNodes,
        edges: fakeEdges
      })
    });
  
    const data = await response.json();
    alert(JSON.stringify(data, null, 2));
} catch (error) {
    alert("Failed to submit pipeline. Check backend server.");
    console.error(error);
}
}

    return (
        <div
         style={{
          display: "flex",
          justifyContent: "center",
          borderTop: "1px solid #1e293b",
          background: "#020617",
         }}>
      <button type="submit" onClick={submitFakePipeline}  style={{
          padding: "10px 18px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          cursor: "pointer",
        }}
        >
          Submit Pipeline
        </button>
        </div>
    );
}
