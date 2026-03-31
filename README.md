# 🤖 My AI Chatbot

A beginner AI project that connects a Python chatbot to a custom Node.js + Express API with predefined responses.

## 📁 Project Structure

my-ai-chatbot/
├── server.js        # Node.js Express API
├── chatbot.py       # Python chatbot client
├── package.json     # Node dependencies
├── requirements.txt # Python dependencies
└── README.md        # Project documentation


## 🛠️ Tech Stack

- **Backend API:** Node.js + Express
- **Chatbot Client:** Python + Requests
- **Communication:** HTTP GET requests (REST API)

## ⚙️ Setup & Installation

### 1. Clone the repository
git clone https://github.com/your-username/my-ai-chatbot.git
cd my-ai-chatbot

### 2. Start the Node.js API
npm install
node server.js

### 3. Run the Python Chatbot (in a new terminal)
pip install requests
python chatbot.py

## 💬 How It Works

1. User types a message in the Python chatbot
2. chatbot.py sends a GET request to the Node.js API
3. API matches the keyword and returns a predefined response
4. Chatbot prints the reply

## 🗺️ API Routes

| Route | Description |
|-------|-------------|
| GET / | Check if API is running |
| GET /chat?message=hi | Main chat route |
| GET /greet | Get a greeting |
| GET /joke | Get a joke |
| GET /help | See all routes |
| GET /bye | Get a goodbye message |
| GET /about | About this API |

## 📌 Example

You: hi
Bot: Hello! Welcome 👋

You: tell me a joke
Bot: Why do programmers prefer dark mode? Because light attracts bugs! 🐛

## 🚀 Future Improvements

- [ ] Connect to a real AI API (Gemini / Claude)
- [ ] Add a web UI with HTML + CSS
- [ ] Deploy API to Render or Railway

## 👤 Author

**Your Name**  
GitHub: [@your-username](https://github.com/your-username)