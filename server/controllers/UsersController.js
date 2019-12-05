const router = require("express").Router();
const User = require("../models/User");

router.get("/users", async (req, res, next) => {
  const users = await User.find().where("_id").ne(req.user._id);
  res.status(200).json(users);
});

module.exports = router;
