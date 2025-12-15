export const fakeNodes = [
  {
    id: "1",
    type: "input",
    position: { x: 100, y: 100 },
    data: { label: "Input Node" }
  },
  {
    id: "2",
    type: "text",
    position: { x: 350, y: 100 },
    data: { label: "Text Node", text: "Hello {{name}}" }
  },
  {
    id: "3",
    type: "output",
    position: { x: 600, y: 100 },
    data: { label: "Output Node" }
  }
];

export const fakeEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-1", source: "3", target: "1" } 
];
