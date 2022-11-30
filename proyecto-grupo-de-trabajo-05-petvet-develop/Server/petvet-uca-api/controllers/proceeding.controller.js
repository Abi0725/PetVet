const Proceeding = require("../models/Proceedings.model");
const debug = require("debug")("app:proce-controller");

const controller = {};

controller.create = async (req, res) => {
    try {
        const { date, weight, reason, treatment, nextDate } = req.body;

        const proceeding = new Proceeding({
            date: date,
            weight: weight,
            reason: reason,
            treatment: treatment,
            nextDate: nextDate,
        });

        const newProceeding = await proceeding.save();

        if(!newProceeding){
            return res.status(400).json({
                error: "ocurrio un error inesperado vuelve a intentarlo"
            })
        }

        return res.status(200).json(newProceeding);
        
    } catch (error) {
        debug(error);
        return res.status(500).json({error: "error interno del servidor"})
    }
}

module.exports = controller;