from fastapi import APIRouter
from app.schemas.auth import LoginRequest  
from app.utils.security import create_access_token 
router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)
@router.post("/login")
def login(data: LoginRequest):
    if (data.email == "admin@metricmind.com" and data.password == "admin123"):
          token= create_access_token(
               {
                    "sub": data.email
               }
          )
          return {"sucess": True,
            "access_token": token,
            "token_type": "bearer"
        }
    return{
        "success": False,
        "message": "Invalid credentials"
    }