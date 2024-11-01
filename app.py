from flask import Flask, render_template
# import sys
# sys.path.append('/api')
import lab_results

app = Flask(__name__)

@app.route('/')
@app.route('/search')
def home():
    return render_template("index.html")

@app.route('/data/<name>')
def data(name):
    result = lab_results.get_results(name)
    return {
        "result": result
    }