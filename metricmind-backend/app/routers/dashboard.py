from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.dashboard import DashboardMetrics
from app.models.revenue import Revenue
from app.models.region import Region
from app.services.dashboard_service import get_dashboard_metrics
router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)
@router.get("/kpis")
def get_kpis(db:Session= Depends(get_db)):
   result=get_dashboard_metrics(db)
   data=result["dashboard"]
   semantic=result["semantic"]
   if not data:
       return{
           "message":"No dashboard data found"
       }
   return{
       "dashboard":{
       "revenue": data.revenue,
       "profit": data.profit,
       "orders":data.orders,
       "customers":data.customers,},
       "semantic": semantic
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
