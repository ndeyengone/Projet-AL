from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from os import path
from flask_login import LoginManager

db = SQLAlchemy()
migrate = Migrate()
DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'sleepingbe@uty'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
    db.init_app(app)
    migrate.init_app(app, db)

    from .views import views
    from .auth import auth
    from .crud import crud

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    app.register_blueprint(crud, url_prefix='/')

    from .models import User

    create_database(app)

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

   

    return app


def create_database(app):
    if not path.exists('website/' + DB_NAME):
        db.create_all(app=app)
        print('Database created !')

