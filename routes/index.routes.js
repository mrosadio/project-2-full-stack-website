const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

const Card = require("../models/Card.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


/* Access profile */
router.get("/profile", isLoggedIn, (req, res, next) => {
  const user = req.session.user;
  res.render("profile", { user });
})

/* Add card */
router.get("/add-card", (req, res, next) => {
  res.render("addCard");
});

router.post("/add-card", (req, res, next) => {
  const { city, date, recommendation, rating } = req.body;
  console.log({ city, date, recommendation, rating })

  Card.create({ city, date, recommendation, rating })
    .then(newCard => {
      console.log(newCard);
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
      res.render("addCard");
    })
});


module.exports = router;
