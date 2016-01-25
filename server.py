
from jinja2 import StrictUndefined

from flask import Flask, render_template, redirect, request, flash, session

app = Flask(__name__)
app.secret_key = "HyrVFG2jcVlpN0qH"

app.jinja_env.undefined = StrictUndefined

@app.route('/', methods=["GET"])
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug = True)