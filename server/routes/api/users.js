// include express so that methods like .Router() are available
const express = require("express");
// reference to the users file in order to write using writeJSONFile
const allUsers = __dirname + "/../../model/users.json";
// work with an array of data from users
const users = require(allUsers);
// helper functions:writeJSONFile and getNewId
const helper = require("../../helper/helper");
// express router
const router = express.Router();

// get all users
router.get("/", (req, res) => {
  const getUsers = users.map(user => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    };
  });
  res.json(getUsers);
});

// get a single user by username
router.get("/:username", (req, res) => {
  let user = users.find(user => {
    return user.username === req.params.username;
  });
  if (user.username === req.params.username) {
    return res.json(user);
  } else {
    res.status(404).json({
      error: `Sorry, we can't find a user called ${req.params.username}. Please try again.`
    });
  }
});

// get a single user by email address
router.get("/:email", (req, res) => {
  let user = users.find(user => {
    return user.email === req.params.email;
  });
  if (user.email === req.params.email) {
    return res.json(user);
  } else {
    res.status(404).json({
      error: `Sorry, we can't find a user connected with ${req.params.email}. Please try again.`
    });
  }
});

// create new user
router.post("/", (req, res) => {
  const newUser = {
    id: helper.getNewId(),
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    items: [],
    conversations: []
  };
  users.push(newUser);
  helper.writeJSONFile(allUsers, users);
  res.json(users);
});

module.exports = router;
