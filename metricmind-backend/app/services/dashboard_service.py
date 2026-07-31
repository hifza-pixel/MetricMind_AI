from sqlalchemy.orm import Session
from app.models.dashboard import DashboardMetrics
def get_dashboard_metrics(db: Session):
    return db.query(DashboardMetrics).first()