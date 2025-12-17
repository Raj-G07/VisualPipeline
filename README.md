# VectorShift Studio

A visual, node-based pipeline builder inspired by VectorShift.  
Users can construct data pipelines by dragging nodes onto a canvas, connecting them, defining variables, and validating the pipeline via a backend DAG parser.

## ✨ Features

### Frontend
- Drag-and-drop node editor using **React Flow**
- Custom nodes:
  - **Input Node** – define input variables
  - **Text Node** – dynamic text with `{{variables}}`
  - **LLM Node** – model selection
  - **Output Node** – define outputs
- Dynamic **Text Node logic**:
  - Auto-resizes based on content
  - Detects `{{variable}}` syntax
  - Automatically creates input handles for variables
  - Evenly distributes handles across node height
- Custom **directed edges**:
  - Gradient strokes
  - Chevron (outline-only) arrowheads
- Keyboard & UI delete support for nodes and edges
- Pipeline validation result shown as an **animated overlay card**
- Empty pipeline state with guided onboarding UI
- Zustand used for global graph state management

### Backend
- **FastAPI** server
- `/pipelines/parse` endpoint
- Validates whether the pipeline forms a **DAG**
- Returns structured validation results (nodes, edges, errors)

## 🧱 Tech Stack

### Frontend
- React
- React Flow
- Zustand
- Lucide / React Icons
- JavaScript (ES6+)
- Inline CSS (no external UI framework)

### Backend
- Python
- FastAPI
- Uvicorn

## 🚀 Getting Started
- Clone the Repository
```bash
git clone <repo-url>
code .
```
- Backend Setup
```bash
cd backend
pip install fastapi uvicorn python-multipart
python -m uvicorn main:app --reload
```
Backend will run at: `http://127.0.0.1:8000`
- Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend will run at : `http://localhost:3000`

## 🔌 API Contract
`POST /pipelines/parse`
- Request Body
```json
{
  "nodes": [...],
  "edges": [...]
}
```
- Response
```json
{
  "is_dag": true,
  "nums_nodes": 4,
  "nums_edges": 3
}
```

## 🙌 Acknowledgements

Inspired by:
- VectorShift
- Modern no-code / low-code pipeline editors
- DAG-based workflow tools
