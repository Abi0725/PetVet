const User = require("../models/User.model");
const debug = require("debug")("app:user1-controller");

const controller = {};

controller.findOneBycode = async (req, res) => {
    try {
        const { code } = req.params;

        const user = await User.find({code: code})
            .populate("pets", "name species breed color gender age birthday");

        if(!user){
            return res.status(400).json({
                error: "El usuario no ha sido encontrado"
            })
        }

        return  res.status(200).json(user)
    } catch (error) {
        debug(error);
        return res.status(500).json({ message: "Error inesperado" })
    }
}

//find All
//find all
controller.findAll = async (req, res) => {
    const user = await User.find({
        status: false
    });

    if(!user){
        return res.status(400).json({
            error: "Ha ocurrido un error"
        })
    }

    return res.status(200).json(user);
}

module.exports = controller;