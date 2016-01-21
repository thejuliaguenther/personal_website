
from jinja2 import StrictUndefined

from flask import Flask, render_template, redirect, request, flash, session

app = Flask(__name__)
app.secret_key = "HyrVFG2jcVlpN0qH"

@app.route('/', methods=["POST","GET"])
def index():
    """
    Renders the main page, index.html, from which all routes are 
    served using Angular.js
    """
    return render_template("index.html")

if __name__ == "__main__":
    app.debug = True

    app.run()