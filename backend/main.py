from fastapi import FastAPI
from schemas.pipeline import PipelineRequest, PipelineResponse
from services.pipeline_service import analyze_pipeline
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/pipelines/parse", response_model=PipelineResponse)
def parse_pipeline(pipeline: PipelineRequest):
    return analyze_pipeline(pipeline.nodes, pipeline.edges)


@app.get("/")
def ping():
    return {"ping": "pong"}
