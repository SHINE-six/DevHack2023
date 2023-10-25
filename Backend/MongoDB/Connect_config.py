from pymongo import MongoClient

uri = 'mongodb+srv://shine:Wisdom_100@cluster0.mxiiu7b.mongodb.net/?retryWrites=true&w=majority'

client = MongoClient(uri)
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
    db = client['test']
    collection = db['News']
except Exception as e:
    print(e)

