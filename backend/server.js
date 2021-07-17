const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.send("Hi Im Node server");
});

app.get("/notes", async (req, res) => {
  try {
    res.json(notes);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

app.get("/notes/:id", async (req, res) => {
  try {
    const note = notes.find((n) => n._id === req.params.id);
    res.json(note);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

app.listen(PORT, console.log(`Server started on PORT - ${PORT}`));
