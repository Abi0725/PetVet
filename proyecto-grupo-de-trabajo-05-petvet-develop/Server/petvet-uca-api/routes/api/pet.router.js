const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const ROLES = require("../../data/roles.constants.json");
const petController = require("../../controllers/pet.controller");

//const { authentication, authorization } = require("../../middlewares/auth.middleware");

//create Pet
router.post("/:id",[
    check("id", "no es un id valido").isMongoId()
],
    petController.create
);

//find byId
router.get("/:identifier",
    petController.findById    
);

//find All

module.exports = router;