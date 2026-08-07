from app.services.query_parser import parse_query
from app.services.langchain_service import ask_llm

def run_agent(user_query: str):
    intent = parse_query(user_query)
    if intent ["metric"]:
        return{
            "tool": "dashboard",
            "result":intent
        }
    response = ask_llm(user_query)
    return {
            "tool": intent["tool"],
            "reply": response
        }