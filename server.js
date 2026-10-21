// --- EASY SETTINGS - CHANGE THESE ANYTIME ---
const MAX_PRICE = 250;
const CONSOLES = ["PS5", "Xbox Series X"];
const CHECK_EVERY_MINUTES = 5;

const BOT_TOKEN = "8778654341:AAFmGJfpUkP0zfLPB3I9DNEv2RH3KmVamlA";
const CHAT_ID = "8900619623";
// -------------------------------------------

async function sendTelegram(msg) {
  try {
    await fetch(https://api.telegram.org/bot${BOT_TOKEN}/sendMessage, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: msg, parse_mode: "Markdown" })
    });
    console.log("Sent:", msg);
  } catch(e){ console.log(e); }
}

// Test ping on startup - you will get this once
sendTelegram(✅ Monitor LIVE! Checking for ${CONSOLES.join(", ")} under £${MAX_PRICE} every ${CHECK_EVERY_MINUTES}min);

// Your scanning logic goes here
// Example: if(price < MAX_PRICE) await sendTelegram(🎮 DEAL! ${name} for £${price} - ${link});

const express = require('express');
const app = express();
app.get('/', (req,res) => res.send('Console monitor running'));
app.listen(10000, () => console.log('Server running'));
