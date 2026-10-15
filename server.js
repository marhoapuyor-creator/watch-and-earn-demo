// Minimal Express server to serve static site and log simple view events.
// Run: npm install && npm start
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const views = {};

app.post('/api/view', (req, res) => {
  const { mediaId } = req.body || {};
  if (!mediaId) return res.status(400).json({ ok: false, error: 'mediaId required' });

  const now = new Date().toISOString();
  views[mediaId] = views[mediaId] || [];
  views[mediaId].push({ at: now, ip: req.ip, ua: req.headers['user-agent'] });
  console.log('View logged:', mediaId, now, req.ip);

  return res.json({ ok: true, mediaId, count: views[mediaId].length });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/video/sample', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'video-player.html'));
});

app.get('/game/sample-game', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'game-page.html'));
});

app.get('/media/sample.mp4', (req, res) => {
  return res.redirect('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening on', port));
