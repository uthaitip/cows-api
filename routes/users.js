var express = require("express");
const Users = require("../modals/Users");
var router = express.Router();

/* GET users listing. */

// get all
router.get("/", async (req, res, next) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

//create user
router.post("/", async (req, res, next) => {
  try {
    const users = await Users.create(req.body);
    res.json(users);
  } catch (error) {
    next(err);
  }
});

// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

module.exports = router;
