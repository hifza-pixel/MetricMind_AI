import os
from dotenv import load_dotenv
from google import genai
load_dotenv()
client=genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
def ask_gemini(prompt :str):
    return f"AI response: {prompt}"