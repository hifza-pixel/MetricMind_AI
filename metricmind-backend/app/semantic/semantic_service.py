from .metrics import METRICS
from .dimensions import DIMENSIONS
from .query_builder import build_query
def get_metric(name: str):
    return METRICS.get(name)
def get_dimension(name: str):
    return DIMENSIONS.get(name)
def get_semantic_query(metric: str, dimension: str = None):
    return build_query(metric, dimension)