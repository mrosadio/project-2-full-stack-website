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
  const user = req.session.currentUser;
  console.log(user);

  const id = user._id;
  console.log(id);

  //find the cards created by that user (username or user id)
  Card.find( {userOwner: `${id}`} )
   .then(cardByUser => {
     //The Card Model has to have the username as one of its values
    console.log("card by user", cardByUser);
     res.render("profile", { user, cardByUser });
   })
   .catch(err => console.log(err));
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
  const { city, date, recommendation, rating, userOwnerId, userOwnerName } = req.body;
  // const id = req.params.id;
  console.log({ city, date, recommendation, rating, userOwnerId, userOwnerName })

  Card.create({ city, date, recommendation, rating, userOwnerId, userOwnerName })
    .then(newCard => {
      res.redirect("/user-cards");
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
      console.log("cards info", cards)
      cards.forEach(card => console.log(card.userOwner));
      //if User.find - userid == cards:userownerid - render user and cards
      
      res.render('cardsList', { cards })
    })
    .catch(err => console.log(err));
});

router.post('/user-cards/:cardId/delete', (req, res, next) => {
  console.log("delete_1:",req.params);
  const id = req.params.cardId;
  console.log("delete_1:",id);
  Card.findByIdAndDelete(id)
    .then(deletedCard => {
      console.log("Card has been deleted: ", deletedCard);
      res.redirect('/profile');
    })
    .catch(err => next(err));
});



module.exports = router;
