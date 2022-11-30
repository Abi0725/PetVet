const {body, param} = require("express-validator");
const validators = {};

validators.createPetValidator = [
    
    body("name")
        .isEmpty().withMessage("el nombre de la mascota no debe de ir vacio")
        .isLength({min: 4}).withMessage("El nombre debe de tener como minimo 4 letras"),
    body("species")
        .isEmpty().withMessage("Es necesario seleccionar una especie"),
    body("breed")
        .isEmpty().withMessage("Es necesario seleccionar la raza"),
    body("color")
        .isEmpty().withMessage("Es necesario especificar un color"),
    body("gender")
        .isEmpty().withMessage("Por favor especificar el sexo de la mascota"),
    body("age")
        .isEmpty().withMessage("La edad de la mascota es necesaria"),
    body("birthday")
        .isEmpty().withMessage("La fecha de nacimiento es necesaria")

]

module.exports = validators;