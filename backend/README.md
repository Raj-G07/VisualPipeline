# Pipeline Validation Backend 

This backend service validates pipelines created in the frontend pipeline builder.
It accepts a graph (nodes + edges), checks whether the pipeline forms a **Directed Acyclic Graph (DAG)**, and returns structured validation results.

The service is intentionally lightweight and focused on **correctness, clarity, and extensibility**.

## Features

- FastAPI-based REST API
- Validates pipeline structure
- Detects cycles in the graph
- Ensures correct edge relationships
- Returns clear validation responses
- Designed to integrate with a visual pipeline editor

## Tech Stack

- **Python 3.10+**
- **FastAPI**
- **Uvicorn**
- **Pydantic**

