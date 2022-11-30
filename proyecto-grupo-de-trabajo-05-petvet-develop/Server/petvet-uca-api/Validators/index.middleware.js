const { validationResult } = require("express-validator");


module.exports = (req, res, next) => {
    //validar los parametros de forma generica
    const errors = validationResult(req);
    //verificamos si hay error

    if(!errors.isEmpty()){
        return res.status(400)
            .json({
                //arreglo donde se explica el atributo y su error
                errors: errors.array().map(error => ({
                  field: error.param,
                  message: error.msg
                }))
            })
    }

    //paso al siguiente middelware
    next();
}