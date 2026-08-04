from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.dashboard import DashboardMetrics
from app.models.revenue import Revenue
from app.models.region import Region
from app.semantic.semantic_service import get_metric
router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)
@router.get("/kpis")
def get_kpis(db:Session= Depends(get_db)):
   revenue_metrics= get_metric("revenue")
   print(revenue_metrics)
   data= db.query(DashboardMetrics).first()
   if not data:
       return{
           "message":"No dashboard data found"
       }
   return{
       "revenue": data.revenue,
       "profit": data.profit,
       "orders":data.orders,
       "customers":data.customers
   }
@router.get("/revenue")
def get_revenue(db:Session=Depends(get_db)):
    revenue= db.query(Revenue).all()
    return[
        {
            "month":item.month,
            "revenue":item.revenue
        }
        for item in revenue
    ]
@router.get("/regions")
def get_regions(db:Session =Depends(get_db)):
    regions= db.query(Region).all()
    return[
        {
            "name":item.name,
            "value":item.value
        }
        for item in regions
    ]
