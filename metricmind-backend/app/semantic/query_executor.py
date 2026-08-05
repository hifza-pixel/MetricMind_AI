from sqlalchemy import func
from app.semantic.metrics import METRICS
from app.models.revenue import Revenue
from app.models.dashboard import DashboardMetrics
MODEL_MAP={
    "Revenue":Revenue,
    "DashboardMetrics":DashboardMetrics
}    
def execute_query(db, semantic_query):
    metric_name= semantic_query["metric"]
    metric=METRICS[metric_name]
    model= MODEL_MAP[metric["table"]]
    column= getattr(model, metric["column"])
    if metric ["aggregation"]=="SUM":
        value= db.query(func.sum(column)).scalar()
    elif metric["aggregation"]=="COUNT":
        value= db.query(model).count()
    else:
        value= None
    return{
        "metric": metric_name,
        "value": value
    }