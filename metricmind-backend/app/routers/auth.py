from fastapi import APIRouter
from app.schemas.auth import LoginRequest   
router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)
@router.post("/login")
def login(data: LoginRequest):
    if data.email == "admin@metricmind.com" and data.password == "admin123":
        return {"sucess": True,
            "message": "Login successful",
            "user": {
                "id": 1,
                "name": "Admin User",
                "email": data.email
            }}
    return{
        "success": False,
        "message": "Invalid email or password"
    }