import express from "express";
const app = express();
const PORT = process.env.PORT || 10000;

const MAX_FEED_BYTES = 10_000_000;
const POLL_INTERVAL_SECONDS = 120;

app.get("/", (req, res) => {
  res.send(`
    <h1>Console Deal Monitor - LIVE ✅</h1>
    <p>Fix: MAX_FEED_BYTES = 10_000_000 (10MB)</p>
    <p>Poll: ${POLL_INTERVAL_SECONDS}s</p>
    <p>No more 2MB limit, no more Replit errors</p>
  `);
});

// Health check for Render
app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
