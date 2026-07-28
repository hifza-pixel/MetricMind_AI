from fastapi import APIRouter
router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)
@router.get("/kpis")
def get_kpis():
    return {
        "revenue": 1280000,
        "profits": 340000,
        "orders": 2356,
        "customers": 1240
    }
@router.get("/revenue")
def get_revenue():
    return [
        {"month": "Jan", "revenue": 4200},
        {"month": "Feb", "revenue": 3900},
        {"month": "Mar", "revenue": 5100},
        {"month": "Apr", "revenue": 4800},
        {"month": "May", "revenue": 6200},
        {"month": "Jun", "revenue": 7000},
    ]
@router.get("/regions")
def get_regions():
    return [
        {"name": "North", "value": 35},
        {"name": "South", "value": 25},
        {"name": "East", "value": 20},
        {"name": "West", "value": 20}
    ]