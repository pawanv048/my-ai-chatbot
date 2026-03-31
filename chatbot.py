# import requests

# API_URL = "http://localhost:3000/chat"

# print("🤖 Chatbot ready! Type 'quit' to exit.\n")

# while True:
#     user_input = input("You: ")

#     if user_input.lower() == "quit":
#         print("Goodbye!")
#         break

#     # Send message to YOUR API
#     response = requests.get(API_URL, params={"message": user_input})
#     data = response.json()

#     print(f"Bot: {data['reply']}\n")


import requests

API_URL = "http://localhost:3000/chat"

print("🤖 Chatbot ready! Type 'quit' to exit.\n")

while True:
    user_input = input("You: ")

    if user_input.lower() == "quit":
        print("Goodbye!")
        break

    response = requests.get(API_URL, params={"message": user_input})
    data = response.json()

    print(f"DEBUG - API returned: {data}")  # 👈 add this line temporarily

    print(f"Bot: {data['reply']}\n")