from os import environ, path
from dotenv import load_dotenv

"""Cargamos variables de nuestro archivo .env"""
basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))


class Config:
    """Se inicializan las variables globales desde el config"""

    # General Flask Config
    SECRET_KEY = environ.get('SECRET_KEY')
    FLASK_ENV = environ.get('FLASK_ENV')
    FLASK_APP = 'wsgi.py'
    FLASK_DEBUG = 0
    TESTING = environ.get('TESTING')
