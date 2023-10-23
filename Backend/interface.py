from tryy import (Chat, InitiateChat, GenerateArticle)


def AIChat():
    InitiateChat()

    while True:
        inn = input("Enter your message: ")
        Chat(inn)
        if (input == "bye"):
            break

def Article(inn):
    return GenerateArticle(inn)

