from flask import current_app as app, render_template


@app.route('/', methods=['GET', 'POST'])
def login():
    """Home Sweet home !."""
    return render_template('home/index.jinja2')


@app.route('/blog/1/', methods=['GET', 'POST'])
def blog1():
    """Home Sweet home !."""
    return render_template('blog/index.jinja2')


@app.route('/playbook/', methods=['GET', 'POST'])
def playbook():
    """playbook"""
    return render_template('playbook.jinja2')
