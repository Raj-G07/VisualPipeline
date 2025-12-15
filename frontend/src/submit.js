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
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <button type="submit" onClick={submitFakePipeline}>Submit Pipeline</button>
        </div>
    );
}
