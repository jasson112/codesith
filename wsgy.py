"""Application entry point."""
from app import create_app
from flask_frozen import Freezer
import sys

app = create_app()
freezer = Freezer(app, with_static_files=True,
                  log_url_for=False, with_no_argument_rules=False)

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "freeze":
        freezer.run(debug=True)
    else:
        app.run(host="0.0.0.0", port=8080, debug=True, threaded=True)
