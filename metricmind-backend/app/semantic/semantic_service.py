from .metrics import METRICS
from .dimensions import DIMENSIONS
from .query_builder import build_query
from .query_executor import execute_query
def get_metric(name: str):
    return METRICS.get(name)
def get_dimension(name: str):
    return DIMENSIONS.get(name)
def get_semantic_query(metric: str, dimension: str = None):
    return build_query(metric, dimension)
def execute_semantic_query(db, metric, dimension=None):
    query =build_query(metric, dimension)
    return execute_query(db, query)