from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand
import os

from app import app, db
app.config.from_object(os.environ['APP_SETTINGS'])

migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    from crews.models.crew_battle import CrewBattle
    from crews.models.crew_match import CrewMatch
    from crews.models.match_result import MatchResult
    manager.run()
