const User = require("../models/user");

exports.getLogin = (req, res, next) => {
  console.log(req.session);

  res.render("auth/login", {
    pageTitle: "Login",
    path: "/login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("65b558a2dde52c6730e237ac")
    .then((user) => {
      req.session.user = user;
      req.session.isLoggedIn = true;

      req.session.save((err) => {
        console.log(err);

        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    pageTitle: "Signup",
    path: "/signup",
    isAuthenticated: false,
  });
};

exports.postSignup = (req, res, next) => {};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);

    res.redirect("/");
  });
};
