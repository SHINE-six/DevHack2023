from newsapi import NewsApiClient
from decouple import config

api = NewsApiClient(api_key=config('NEWS_API_KEY'))

x = api.get_everything(q='food')

print(x)
