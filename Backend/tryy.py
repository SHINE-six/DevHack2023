#cQg6GiiFNDCdbwIUQ5yk4VY3su8eb6yS91tO2Neblvkm_mHLPwoHzy8CpdNrQUb5Ee_qVQ. (bard ai)
#AIzaSyD3L3VAx_njujrDy2yWX-4yfDRmDaOZjVQ (PaLM)

import google.generativeai as palm


palm.configure(api_key='AIzaSyD3L3VAx_njujrDy2yWX-4yfDRmDaOZjVQ')


def InitiateChat():
    # Create a new conversation
    global convee
    convee = palm.chat(messages='Hello')
    print(convee.last)

def Chat(input):
    response = convee.reply(input)
    print(response.last)


def GenerateArticle(input):
    abc = input
    determine =f"Does {abc} relate to health?"
    determine_res = palm.generate_text(
            prompt=determine,  
            temperature=0,
            max_output_tokens=200,
            )

    print(determine_res.result) 

    if (determine_res.result=="no"):
        print("Please enter a health related article")
    else:
        prompt =f"give me a health related article/blog about {abc}"

        response = palm.generate_text(
            prompt=prompt,  
            temperature=0.5,
            max_output_tokens=200,
            )

        print(response.result) 

