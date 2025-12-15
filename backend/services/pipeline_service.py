from typing import List, Dict
from utils.graph import is_dag


def analyze_pipeline(nodes: List[Dict], edges: List[Dict]) -> dict:
    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag(nodes, edges)
    }
