from fastapi import APIRouter
from app.schemas.chat import ChatRequest
from app.services.ai_service import (
    get_sales_forecast,
    get_recommendations,
    get_ai_analytics,
)
router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"]
)
@router.post("/chat")
def chat(data: ChatRequest):
    return {
        "reply": f"You asked: {data.message}. This is a sample AI response."
    }
@router.get("/forecast")
def forecast():
    return get_sales_forecast()

@router.get("/recommendations")
def recommendations():
    return get_recommendations()

@router.get("/analytics")
def analytics():
    return get_ai_analytics()