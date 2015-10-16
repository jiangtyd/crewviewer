from app import db
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import Column, Integer, String, ForeignKey

# What happened during a crew match
class CrewMatch(db.Model):
    __tablename__ = 'crew_match'

    id = Column(Integer, primary_key=True)
    battle_id = Column(Integer, ForeignKey("crew_battle.id"), nullable=False)
    # position in a crew battle
    battle_match_index = Column(Integer, nullable=False)

    def __init__(self, battle_id, match_index):
        self.battle_id = battle_id 
        self.match_index = match_index

    def __repr__(self):
        return '<CrewMatch {}>'.format(self.id)
