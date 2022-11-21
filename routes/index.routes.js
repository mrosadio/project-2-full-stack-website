const express = require('express');
const isLoggedIn = require('../middleware/isLoggedIn');
const router = express.Router();

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
})


module.exports = router;
