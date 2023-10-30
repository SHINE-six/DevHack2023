import google.generativeai as palm


palm.configure(api_key='AIzaSyD3L3VAx_njujrDy2yWX-4yfDRmDaOZjVQ')



def InitiateChat():
    # Create a new conversation
    global convee
    convee = palm.chat(messages='Hello')
    print(convee.last)

def Chat():
    inn = input("Enter your message: ")
    red = convee.reply(inn)
    print(red.last)
    if (inn == "bye"):
        print(red.messages)
        return 0


while True:
    InitiateChat()
    if (Chat() == 0):
        break



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
        prompt =f"give me a health related article/blog about {abc}"

        response = palm.generate_text(
            prompt=prompt,  
            temperature=0.6,
            max_output_tokens=400,
            candidate_count=1
            )

        return (response.result)

GenerateArticle("covid")