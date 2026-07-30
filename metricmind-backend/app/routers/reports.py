from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.models.report import Report
from app.schemas.report import ReportCreate
router= APIRouter(
    prefix="/reports",
    tags=["Reports"]
)
@router.get("/")
def get_report(db: Session= Depends(get_db)):
    reports= db.query(Report).all()
    return reports
@router.post("/")
def create_report(report: ReportCreate, db:Session= Depends(get_db)):
    new_report= Report(
        name=report.name,
        report_type= report.report_type,
        generated_data= report.generated_date,
        status= report.status
    )
    db.add(new_report)
    db.commit()
    db.refresh(new_report)
    return new_report
@router.put("/{report_id}")
def update_report(report_id: int, report:ReportCreate, db:Session= Depends(get_db)):
    db_report=db.query(Report).filter(Report.id == report_id).first()
    if not db_report:
        return{
            "message":"Report not found"
        }
    db_report.name=report.name
    db_report.report_type=report.report_type
    db_report.generated_date=report.generated_date
    db_report.status=report.status
    db.commit()
    db.refresh(db_report)
    return db_report
@router.delete("/{report_id}")
def delete_report(report_id: int, report:ReportCreate, db:Session= Depends(get_db)):
    report=db.query(Report).filter(Report.id == report_id).first()
    if not report:
        return{
            "message":"Report not found"
        }
    db.delete(report)
    db.commit()
    return {
        "message":"Report deleted successfully"
    }
@router.get("/search/{keyword}")
def search_reports(keyword:str, db:Session= Depends(get_db)):
    reports=db.query(Report).filter(Report.name.contains(keyword)).all()
    return reports