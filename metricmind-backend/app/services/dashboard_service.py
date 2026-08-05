from sqlalchemy.orm import Session
from app.models.dashboard import DashboardMetrics
from app.semantic.semantic_service import execute_semantic_query
def get_dashboard_metrics(db):
    revenue=execute_semantic_query(db, "revenue","region")
    orders=execute_semantic_query(db, "orders")
    dashboard=db.query(DashboardMetrics).first()
    return{
        "dashboard": dashboard,
        "semantic":{
            "revenue": revenue,
            "orders": orders
        }
    }