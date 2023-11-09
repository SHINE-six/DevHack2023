from pymongo import MongoClient
from decouple import config

uri = config('MONGO_URI')

client = MongoClient(uri)
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    db = client['test']
    collection = db['News']
except Exception as e:
    print("Error message " + e)

