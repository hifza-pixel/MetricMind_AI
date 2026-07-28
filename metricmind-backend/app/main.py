from fastapi import FastAPI
from app.routers import auth, dashboard
app=FastAPI(
    title="MetricMind AI API",
    version="1.0.0",
    description="Backend API for MetricMind AI Dashboard"
)
app.include_router(auth.router)
app.include_router(dashboard.router)
@app.get("/")
def root():
    return { "message" : "Welcome to MetricMind AI Backend 🚀"}
@app.get("/health")
def health():
    return { "status" : "healthy"}