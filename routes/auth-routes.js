// routes/auth-routes.js
const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get("/login", (req, res, next) => {
  res.render("auth/login", {error: req.query.error, title: "Login Page"});
});


router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login?error=username or password do not match",
  passReqToCallback: true
}));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/auth/login");
});

// User model
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});


router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const fullname = req.body.fullName;

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }
  User.findOne({ username })
  .then(user => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);
    
    const newUser = new User({
      fullname,
      username,
      password: hashPass
    });
    newUser.save((err) => {
      if (err) {
        res.render("auth/signup", { message: "Something went wrong" });
      } else {
        res.redirect("/");
      }
    });
  })
  .catch(error => {
    next(error)
  })
});
module.exports = router;