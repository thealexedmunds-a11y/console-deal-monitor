import http from 'http';

const MAX_PRICE = 250;
const CONSOLES = ["PS5", "Xbox Series X"];
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

async function sendTelegram(msg) {
  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: msg })
    });
  } catch(e){ console.log(e); }
}

sendTelegram(`✅ LIVE! Checking ${CONSOLES.join(", ")} under £${MAX_PRICE}`);

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Monitor running');
});
server.listen(process.env.PORT || 10000);
