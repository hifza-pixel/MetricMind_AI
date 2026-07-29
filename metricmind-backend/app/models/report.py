from sqlalchemy import Column, Integer, String
from app.database import Base
class Report(Base):
    __tablename__="reports"
    id= Column(Integer, primary_key=True,index=True)
    name=Column(String(150))
    report_type= Column(String(50))
    generated_date= Column(String(30))
    status= Column(String(30))