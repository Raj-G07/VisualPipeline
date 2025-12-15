from collections import defaultdict, deque
from typing import List, Dict


def is_dag(nodes: List[Dict], edges: List[Dict]) -> bool:
    graph = defaultdict(list)
    indegree = defaultdict(int)

    for node in nodes:
        indegree[node["id"]] = 0

    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        graph[source].append(target)
        indegree[target] += 1

    queue = deque([n for n in indegree if indegree[n] == 0])
    visited = 0

    while queue:
        node = queue.popleft()
        visited += 1
        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    return visited == len(nodes)
