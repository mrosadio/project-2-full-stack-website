const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* Get signup page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
})

/* Get login page */
router.get("/login", (req, res, next) => {
  res.render("")
})

module.exports = router;
