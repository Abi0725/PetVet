const {body, param} = require("express-validator");
const validators = {};

validators.createProceedingValidator = [
    
    body("date")
        .isEmpty().withMessage("La fecha no debe de ir vacia")
        .isDate().withMessage("Debe de ser tipo fecha"),
    body("weight")
        .isEmpty().withMessage("El peso no debe de ir vacio")
        .isNumeric().withMessage("Debe de ser un numero"),
    body("reason")
        .isEmpty().withMessage("Especificar el motivo de consulat, este campo no puede ir vacio"),
    body("treatment"),
    body("nextDate")
        .isEmpty().withMessage("No debe de ir vacio")
        .isDate().withMessage("Debe ser tipo fecha")
];

validators.createPushPetId = [
    param("id")
        .notEmpty().withMessage("el id no debe de ir vacio")
        .isMongoId().withMessage("el id debe de ser de mongo")
]

module.exports = validators;