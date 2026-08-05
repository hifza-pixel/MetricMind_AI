from .metrics import METRICS
from .dimensions import DIMENSIONS
def build_query(metric :str ,dimension: str= None):
    metric_info= METRICS.get(metric)
    if not metric_info:
        raise ValueError(f"Metric '{metric}' not found")
    query ={
        "metric": metric,
        "table": metric_info.get("table"),
        "aggregation": metric_info.get("aggregation"),
    }
    if "column" in metric_info:
        query["column"]= metric_info.get("column")
    if dimension:
        if dimension not in DIMENSIONS:
            raise ValueError(f"Dimension '{dimension}' not found")
        query["dimension"]= DIMENSIONS[dimension]  
    return query