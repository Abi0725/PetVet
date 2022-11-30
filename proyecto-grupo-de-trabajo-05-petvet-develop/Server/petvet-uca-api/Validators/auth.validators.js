const {body} = require("express-validator");


const validators = {};

const passwordRegexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/

validators.registerValidator = [
    body("username")
        .notEmpty().withMessage("El username no puede ir vacio")
        .isLength({min: 4, max: 32}).withMessage("El username debe tener entre 4 y 32 caracteres"),
    body("email")
        .notEmpty().withMessage("El correo no debe de ir vacio")
        .isEmail().withMessage("Debes respetar el formato del correo"),
    body("password")
        .notEmpty().withMessage("La password no debe de ir vacia")
        .matches(passwordRegexp).withMessage("La password debe de tener entre 8 y 32 caracteres, al menos 1 M, 1m y un num")
]

module.exports = validators;