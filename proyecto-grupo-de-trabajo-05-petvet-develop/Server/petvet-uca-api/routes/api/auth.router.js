const Express = require("express");
const { register } = require("../../controllers/auth.controller");
const router = Express.Router();

const authController = require("../../controllers/auth.controller");
const { registerValidator } = require("../../Validators/auth.validators");
const runValidators = require("../../Validators/index.middleware");
const { authentication } = require("../../middlewares/auth.middleware");

router.post("/signup", 
    registerValidator,
    runValidators,
    authController.register
);

router.post("/signin", authController.login);

router.get("/whoami", authentication, authController.whoami);

module.exports = router;