from flask import Flask, request, jsonify
from flask_cors import CORS
# from PaLM_api.interface import (AIChat, Article)
from MongoDB.Connect_config import collection
from PaLM_api.AIAI import (InitiateChat, GenerateArticle, CHATCHAT)




app = Flask(__name__)
CORS(app)

@app.route('/api', methods=['GET'])
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
    return GenerateArticle(title)

@app.route('/api/giaooo', methods=['POST'])
def post_news():
    data = request.get_json()
    response = collection.insert_one(data)
    print(response)
    return 'News uploaded: \n' + str(response)

@app.route('/apigetnews', methods=['GET'])
def get_news():
    response = collection.find()
    news = []
    for item in response:
        news.append(item)
    return news[1]['articles']

@app.route('/apiIniChat', methods=['GET'])
def inichat():
    return InitiateChat()

@app.route('/apichat', methods=['POST'])
def chat():
    data = request.get_json()
    response = CHATCHAT(data['prompt'])
    return response





# Start the server
if __name__ == '__main__':
    app.run(debug=False, port=5000)