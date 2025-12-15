from pydantic import BaseModel
from typing import List, Dict


class PipelineRequest(BaseModel):
    nodes: List[Dict]
    edges: List[Dict]


class PipelineResponse(BaseModel):
    num_nodes: int
    num_edges: int
    is_dag: bool
