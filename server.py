import os

from jinja2 import StrictUndefined

from flask import Flask, render_template, make_response, redirect, request, flash, session

app = Flask(__name__)
app.secret_key = os.environ.get("FLASK_SECRET_KEY", "ABCDEF")

app.jinja_env.undefined = StrictUndefined

@app.route('/', methods=["GET"])
@app.route('/support-genius')
@app.route('/ratings')
def index(**kwargs):
    return make_response(open('templates/index.html').read())

if __name__ == "__main__":
    PORT = int(os.environ.get("PORT", 5000))
    DEBUG = "NO_DEBUG" not in os.environ
    app.run(debug=DEBUG, host="0.0.0.0", port=PORT)

    