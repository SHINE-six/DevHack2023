import json
import google.generativeai as palm
from decouple import config

# Set the API key
palm.configure(api_key=config('PaLM_API_KEY'))


# Create a new conversation
def InitiateChat():
    global convee
    convee = palm.chat(messages='Hello')
    print(convee.messages)
    return (convee.messages)

def Chat(convee,text):
    convee = convee.reply(text)
    print(convee.last)
    print(convee.messages)
    return (convee)


def CHATCHAT(text):
    global convee
    convee = Chat(convee,text)
    return (convee.messages)


def GenerateArticle(input):
    abc = input
    determine =f"Does {abc} relate to public health?"
    determine_res = palm.generate_text(
            prompt=determine,  
            temperature=0.1,
            max_output_tokens=2,
            candidate_count=1
            )


    if (determine_res.result=="no"):
        return "Please enter a health related article"
    else:
        prompt = f"give me a health related article/blog about {abc} in json format with 400 words, consisting of title, tags, content: (type(header/paragraph/list/list-item/image), text(in one line))"

        while True:
            try: 
                response = palm.generate_text(
                    prompt=prompt,  
                    temperature=0.6,
                    max_output_tokens=700,
                    candidate_count=1
                    )
                response = response.result
                if response[0] == '`':
                    response = '\n'.join(response.splitlines()[1:-1])
                    
                response = json.loads(response)
                return (response)
            except:
                continue





