from flask import current_app as app, render_template


@app.route('/', methods=['GET', 'POST'])
def login():
    """Home Sweet home !."""
    return render_template('home/index.jinja2')
