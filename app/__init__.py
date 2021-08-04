from flask import Flask
from .util import jinjasset


def create_app():
    """Aqui debe ir la construccion de nuestra aplicacion web"""
    app = Flask(__name__, instance_relative_config=False)
    """Creamos un archivo config para asi poder reeutilizar variables y usar variables globales"""
    app.config.from_object('config.Config')

    with app.app_context():
        """Agregamos extensiones de jinja"""
        app.jinja_env.add_extension('jinja2.ext.debug')
        app.jinja_env.add_extension('jinja2.ext.do')

        """Agregamos nuestra extension custom jinssasset"""
        app.jinja_env.globals.update(jinjasset=jinjasset.Jinjasset.test)
        app.jinja_env.globals.update(
            jinjasset_single=jinjasset.Jinjasset.single)
        app.jinja_env.globals.update(
            jinjasset_all=jinjasset.Jinjasset.all)

        """importamos las rutas"""
        from . import routing

    """Debolvemos el app para que el WSGI lo llame"""
    return app
