import os
from langchain_google_genai import ChatGoogleGenerativeAI
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=os.getenv("GEMINI_API_KEY"),temperature=0.3,
)
def ask_llm(prompt: str) :
    response = llm.invoke(prompt)
    return response.content