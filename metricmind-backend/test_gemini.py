from app.services.gemini_service import ask_gemini
print("Testing Gemini Service...")
response = ask_gemini("Hello")
print(response)