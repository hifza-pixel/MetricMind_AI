from sqlalchemy import Column, Integer, String
from app.database import Base
class Revenue(Base):
    __tablename__= "revenue"
    id= Column(Integer, primary_key=True, index=True)
    month= Column(String(20))
    revenue= Column(Integer)
    