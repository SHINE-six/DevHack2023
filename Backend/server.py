from flask import Flask, request, jsonify
from flask_cors import CORS
from markupsafe import escape
from interface import (AIChat, Article)

# from tryy import Chat

app = Flask(__name__)
CORS(app)

@app.route('/api')
def home():
    x = {"name": "John", "age": 30, "city": "New York"}
    return jsonify(x)

@app.route('/api', methods=['POST'])
def api():
    data = request.get_json()
    print(data)
    return 'Welcome welcome'

@app.route('/api/<title>', methods=['GET'])
def api_title(title):
    return Article(title)





# Start the server
if __name__ == '__main__':
    app.run(debug=False, port=5000)