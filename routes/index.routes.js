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



/* Create card */
router.get("/add-card", /*isLoggedIn,*/ (req, res, next) => {
  const user = req.session.currentUser;

  if (!user) {
    res.render("auth/signup");
  } else {
    res.render("addCard", { user });
  }
});

router.post("/add-card", (req, res, next) => {
  const { city, date, recommendation, rating } = req.body;
  // const id = req.params.id;
  console.log({ city, date, recommendation, rating })

  Card.create({ city, date, recommendation, rating })
    .then(newCard => {
      console.log(newCard);
      res.redirect("/map");
    })
    .catch(err => {
      console.log(err);
      res.render("addCard");
    })
});


/* Get cards */
router.get('/user-cards', (req, res, next) => {
  Card.find()
    .then(cards => {
        res.render('/cardsList', { cards })
    })
    .catch(err => console.log(err));
});

module.exports = router;
