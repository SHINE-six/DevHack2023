from newsapi import NewsApiClient

api = NewsApiClient(api_key='d35e40197c2943babf0e8d3330bc337e')

x = api.get_top_headlines(category='health')

print(x)
