// submit.js
import { fakeNodes, fakeEdges } from "./mocks/pipelineDagIsFalse";
import {Play} from "lucide-react"
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
const selector = (state) => ({
  nodes: state.nodes,
});

export const SubmitButton = () => {
const {nodes} = useStore(selector, shallow);
const isDisabled = nodes.length === 0;
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
        <button type="submit" 
        disabled={isDisabled}
        onClick={submitFakePipeline}
          style={{
        padding: "10px 18px",
          background: isDisabled ? "#345685ff" : "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          fontSize: 13,
          fontWeight: 600,
          cursor: isDisabled ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.2s ease"
        }}
        >
        <Play style={{ width: "1rem", height: "1rem", margin: "0 8px 0 0" }} />
         Run Pipeline
        </button>
        </div>
    );
}
