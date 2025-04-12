const express = require('express');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = 3000;

// Replace with your actual Telegram bot token
const token = '7632157415:AAFVMrewIXU3MQDcxKbq8XFMcWkRMpGf6rg';
const bot = new TelegramBot(token, { polling: true });

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.send('🩺 Dhanvantari Bot API is running!');
});

// Telegram bot /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Hello! I am Dhanvantari 🤖 — your health companion.');
});

app.listen(port, () => {
  console.log(`🚀 API running at http://localhost:${port}`);
});
