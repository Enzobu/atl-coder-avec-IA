const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Base SQLite en fichier local
const db = new sqlite3.Database('./data/counter.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS counter (value INTEGER)");
  db.get("SELECT value FROM counter", (err, row) => {
    if (!row) db.run("INSERT INTO counter (value) VALUES (0)");
  });
});

app.get('/counter', (req, res) => {
  db.get("SELECT value FROM counter", (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ value: row.value });
  });
});

app.post('/counter/increment', (req, res) => {
  db.run("UPDATE counter SET value = value + 1", function(err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get("SELECT value FROM counter", (err, row) => {
      res.json({ value: row.value });
    });
  });
});

app.post('/counter/reset', (req, res) => {
  db.run("UPDATE counter SET value = 0", function(err) {
    if (err) return res.status(500).json({ error: err.message });
    db.get("SELECT value FROM counter", (err, row) => {
      res.json({ value: row.value });
    });
  });
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
