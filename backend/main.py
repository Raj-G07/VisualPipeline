from fastapi import FastAPI
from schemas.pipeline import PipelineRequest, PipelineResponse
from services.pipeline_service import analyze_pipeline

app = FastAPI()


@app.post("/pipelines/parse", response_model=PipelineResponse)
def parse_pipeline(pipeline: PipelineRequest):
    return analyze_pipeline(pipeline.nodes, pipeline.edges)


@app.get("/")
def ping():
    return {"ping": "pong"}
