from fastapi import APIRouter
from app.schemas.chat import ChatRequest
from app.services.ai_service import (
    get_sales_forecast,
    get_recommendations,
    get_ai_analytics,
)
from app.services.gemini_service import ask_gemini
from app.services.query_parser import parse_query
from app.semantic.semantic_service import get_semantic_query
from app.services.agent_service import run_agent
from app.services.memory_service import save_message, get_history, get_all_sessions
from app.services.langchain_service import ask_llm
from app.services.cache_service import get_cached_response, save_cached_response
from app.services.prompt_service import build_prompt
from fastapi.responses import StreamingResponse
import time
def generate_stream(text: str):
    for word in text.split():
        yield word + " "
        time.sleep(0.05)
router = APIRouter(
    prefix="/ai",
    tags=["AI Assistant"]
)
@router.post("/chat")
def chat(data: ChatRequest):
    session_id = "demo-user"
    cached = get_cached_response(data.message)
    if cached:
        return {
            "tool": "cache",
            "reply": cached
        }
    save_message(session_id, "user", data.message)
    history = get_history(session_id)
    prompt = build_prompt(history, data.message)
    response = ask_llm(prompt)
    save_message(session_id, "assistant", response)
    save_cached_response(data.message, response)
    return {
        "tool": "gemini",
        "reply": response
    }
@router.post("/chat/stream")
def stream_chat(data: ChatRequest):

    result = run_agent(data.message)

    if result["tool"] == "gemini":
        response = result["result"]
    else:
        response = str(result["result"])

    return StreamingResponse(
        generate_stream(response),
        media_type="text/plain"
    )
@router.get("/recommendations")
def recommendations():
    return get_recommendations()

@router.get("/analytics")
def analytics():
    return get_ai_analytics()
@router.get("/history/{session_id}")
def chat_history(session_id:str):
    return{
        "session_id": session_id,
        "messages": get_history(session_id)
    }
@router.get("/sessions")
def sessions():
    return{
        "sessions": get_all_sessions()
    }