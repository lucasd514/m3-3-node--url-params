"use strict";

const morgan = require("morgan");
const express = require("express");
const { top50 } = require("./data/top50");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

// homepage
const home = (req, res) =>
  res.render("pages/top50", { top50, title: "top 50" });
console.log(top50);
app.get("/top50", home);

// individual pages
const songRank = (req, res) => {
  const rank = req.params.rank - 1;
  console.log("this is the" + rank);
  if (rank >= 0 && rank < 51)
    res.render("pages/songPage", {
      title: "song #" + top50[rank].rank,
      song: top50[rank],
      rank: rank,
    });
  else {
    res.status(404);
    res.render("pages/fourOhFour", {
      title: "I got nothing",
      path: req.originalUrl,
    });
  }
};

app.get("/top50/songs/:rank", songRank);
// handle 404s
app.get("*", (req, res) => {
  res.status(404);
  res.render("pages/fourOhFour", {
    title: "I got nothing",
    path: req.originalUrl,
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
