from pydantic import BaseModel
class DashboardResponse(BaseModel):
    revenue: int
    profit: int
    orders: int
    customers: int