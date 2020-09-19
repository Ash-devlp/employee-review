var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const db = require("../util/db");

router.post("/login", function (req, res, next) {
  console.log("login user", req.body);
  db.execute("SELECT * FROM admins WHERE email = ?;", [req.body.email])
    .then((result) => {
      var user = result[0][0];
      if (user) {
        if (req.body.password !== user.password) {
          return res.status(401).json({
            title: "An error occured",
            error: { message: "Invalid Login" },
          });
        }
        var token = jwt.sign({ user: user }, "tokensecret", {
          expiresIn: 7200,
        });
        res.status(200).json({ message: "Login successful", token: token });
      }
      if (!user) {
        return res.status(401).json({
          title: "An error occured",
          error: { message: "Invalid Login" },
        });
      }
    })
    .catch((err) => {
      return res.status(401).json({ title: "An error occured", error: err });
    });
});

module.exports = router;
