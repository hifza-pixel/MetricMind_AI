from sqlalchemy import Column, Integer
from  app.database import Base
class DashboardMetrics(Base):
    __tablename__="dashboard_metrics"
    id= Column(Integer, primary_key=True, index=True)
    revenue= Column(Integer)
    profit= Column(Integer)
    orders= Column(Integer)
    customers= Column(Integer)