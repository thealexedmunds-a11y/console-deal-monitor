// --- EASY SETTINGS - CHANGE ANYTIME ---
const MAX_PRICE = 250;
const CONSOLES = ["PS5", "Xbox Series X"];
const BOT_TOKEN = "8778654341:AAFmGJfpUkP0zfLPB3I9DNEv2RH3KmVamlA";
const CHAT_ID = "8900619623";
// --------------------------------------

async function sendTelegram(msg) {
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: msg })
    });
    const data = await res.json();
    console.log("Telegram result:", data);
  } catch(e){ console.log("Error:", e); }
}

// Send test message on start
sendTelegram(`✅ Monitor LIVE! Checking for ${CONSOLES.join(", ")} under £${MAX_PRICE}`);

// Simple web server (Render needs this to stay alive)
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Console monitor running - Telegram active');
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
