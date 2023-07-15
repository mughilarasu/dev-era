const router = require("express").Router();
let user = require("../models/user.model");

router.route("/").get((req, res) => {
  user
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/addUsers").post((req, res) => {
  const username = req.body.username;
  const phonenumber = req.body.phonenumber;
  const emailID = req.body.emailID;
  
  const newUser = new user({ username, phonenumber, emailID });
  newUser
    .save()
    .then((users) => res.json("user added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router ;