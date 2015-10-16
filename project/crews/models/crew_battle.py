from app import db
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import Column, Integer, String

# What happened to a single player during the match
class CrewBattle(db.Model):
    __tablename__ = 'crew_battle'

    id = Column(Integer, primary_key=True)
    team1_name = Column(String(64), nullable=False)
    team2_name = Column(String(64), nullable=False)
    # total stocks per side
    total_stocks = Column(Integer, nullable=False)

    def __init__(self, team1_name, team2_name, total_stocks):
        self.team1_name = team1_name
        self.team2_name = team2_name
        self.total_stocks = total_stocks

    def __repr__(self):
        return '<CrewBattle {}>'.format(self.id)
