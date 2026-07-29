from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.report import Report
router= APIRouter(
    prefix="/reports",
    tags=["Reports"]
)
@router.get("/")
def get_report(db: Session= Depends(get_db)):
    reports= db.query(Report).all()
    return reports