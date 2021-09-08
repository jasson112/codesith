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

    # default to application root directory (same level as "templates") named "build"
    FREEZER_DESTINATION = '../build'

    # MimetypeMismatchWarning: Filename extension of u'new-york' (type application/octet-stream) does not match Content-Type: text/html; charset=utf-8
    # If the urls are '/new-york', it will warn of MimetypeMismatchWarning
    # You could either disable warning, or change path to '/new-york/', which generate 'new-york/index.html'
    FREEZER_IGNORE_MIMETYPE_WARNINGS = True

    # If run the static generation for 30 minutes and then it crashed, this will only generate files which are not generated yet (basically continue from last run)
    # If you change the page code and the content is different, it will not regenerate the page
    FREEZER_SKIP_EXISTING = True

    # This is useful during development as you might want to remove certain @freezer.register_generator to speed up the process, but don't want those generated files to be deleted
    FREEZER_REMOVE_EXTRA_FILES = False
