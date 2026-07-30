from pydantic import BaseModel
class ReportCreate(BaseModel):
    name:str
    report_type: str
    generated_date: str
    status:str 