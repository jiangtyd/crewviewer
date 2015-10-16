from app import db
from sqlalchemy.dialects.postgresql import JSON
from sqlalchemy import Column, Integer, String, ForeignKey

# What happened to a single player during the match
class MatchResult(db.Model):
    __tablename__ = 'match_result'

    id = Column(Integer, primary_key=True)
    match_id = Column(Integer, ForeignKey("crew_match.id"), nullable=False)
    # if this is player 1 or player 2 (or player n) of a match
    match_player_index = Column(Integer, nullable=False)
    name = Column(String(64), nullable=False)
    character = Column(String(32), nullable=False)
    initial_stocks = Column(Integer, nullable=False)
    final_stocks = Column(Integer, nullable=False)

    def __init__(self, player_result):
        self.name, self.character = player_result.name, player_result.character
        self.initial_stocks, self.final_stocks = player_result.initial_stocks, player_result.final_stocks

    def __repr__(self):
        return '<MatchResult {}>'.format(self.id)
