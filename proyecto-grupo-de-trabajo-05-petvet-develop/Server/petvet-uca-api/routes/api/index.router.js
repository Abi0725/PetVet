const express = require("express");
const router = express.Router();

//importat todos los enrutadores

const authRouter = require("./auth.router");
const petRouter = require("./pet.router");
const ProceedingRouter = require("./proceeding.router");
const userRouter = require("./user.router")

//definir las rutas
router.use("/auth", authRouter);
router.use("/pet", petRouter);
router.use("/proceeding", ProceedingRouter);
router.use("/user", userRouter);


module.exports = router;