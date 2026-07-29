from fastapi import FastAPI
from app.routers import auth, dashboard, reports
from app.database import Base, engine
from app import models
app=FastAPI(
    title="MetricMind AI API",
    version="1.0.0",
    description="Backend API for MetricMind AI Dashboard"
)
Base.metadata.create_all(bind=engine)
app.include_router(auth.router)
app.include_router(dashboard.router)
app.include_router(reports.router)
@app.get("/")
def root():
    return { "message" : "Welcome to MetricMind AI Backend 🚀"}
@app.get("/health")
def health():
    return { "status" : "healthy"}
@app.get("/db-test")
def db_test():
    try:
        connection= engine.connect()
        connection.close()
        return{
            "status": "Database connect Successfully"
        }
    except Exception as e:
        return{
            "status":"Connection Failed",
            "error": str (e)
        }