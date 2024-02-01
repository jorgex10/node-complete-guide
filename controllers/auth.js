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

      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
