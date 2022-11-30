const express = require("express");
const router = express.Router();

const userController = require("../../controllers/user.controller");

router.get("/:code", userController.findOneBycode);

//find All
router.get("/", userController.findAll);

module.exports = router;