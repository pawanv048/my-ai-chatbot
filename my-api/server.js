const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// --- Your Predefined Responses ---
const responses = {
  greet:   { message: "Hello! Welcome to my API 👋" },
  bye:     { message: "Goodbye! Have a great day 😊" },
  help:    { message: "Available routes: /greet, /bye, /help, /about, /joke" },
  about:   { message: "This is my first API built with Node.js and Express!" },
  joke:    { message: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛" },
};

// --- Routes ---
app.get('/', (req, res) => {
  res.json({ message: "My API is running! 🚀", hint: "Try /greet or /joke" });
});

app.get('/greet', (req, res) => res.json(responses.greet));
app.get('/bye',   (req, res) => res.json(responses.bye));
app.get('/help',  (req, res) => res.json(responses.help));
app.get('/about', (req, res) => res.json(responses.about));
app.get('/joke',  (req, res) => res.json(responses.joke));


// Add this route in your server.js
app.get('/chat', (req, res) => {
  const message = req.query.message?.toLowerCase().trim();

  if (!message) {
    return res.json({ reply: "Please send a message! Example: /chat?message=hello" });
  }

  // Keyword matching logic
  if (message.includes("hello") || message.includes("hi")) {
    return res.json({ reply: "Hello! Welcome 👋" });
  } else if (message.includes("joke")) {
    return res.json({ reply: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛" });
  } else if (message.includes("bye")) {
    return res.json({ reply: "Goodbye! Have a great day 😊" });
  } else if (message.includes("help")) {
    return res.json({ reply: "I can respond to: hello, joke, bye, help, name" });
  } else if (message.includes("name")) {
    return res.json({ reply: "I am your custom chatbot API! 🤖" });
  } else {
    return res.json({ reply: "I don't understand that yet. Try: hello, joke, bye, help" });
  }
});

// --- Handle unknown routes ---
app.use((req, res) => {
  res.status(404).json({ error: "Route not found ❌", hint: "Try /help to see all routes" });
});

// --- Start Server ---
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});