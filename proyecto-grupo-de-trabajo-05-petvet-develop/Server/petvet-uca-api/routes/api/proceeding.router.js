const express = require("express");
const router = express.Router();

const proceedignController = require("../../controllers/proceeding.controller");
const runValidations = require("../../Validators/index.middleware");
const proceedingValidations = require("../../Validators/proceeding.validators");

router.post("/",
    //proceedingValidations.createProceedingValidator,
    //runValidations,
    proceedignController.create
);

module.exports = router;