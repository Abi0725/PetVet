const Pet = require("../models/Pets.model");
const User = require("../models/User.model");
const debug = require("debug")("app:pet-controller");

const controller = {};

//obtener todas las mascotas
controller.create = async (req, res) => {
    try{
        const { name, species, breed, color, gender, age, birthday } =  req.body;

        //recibimos el id del usuario 
        const { id } = req.params;

        const pet =  new Pet({
            name: name,
            species: species,
            breed: breed,
            color: color,
            gender: gender,
            age: age,
            birthday: birthday
        });

        const user = await User.findById(id);

        user.pets.push(pet.id);

        const newPet = await pet.save();
        await user.save();
        

        if(!newPet){
            return res.status(400).json({
                "error": "ocurrio algun erro vuelve a intentarlo"
            })
        }

        return res.status(200).json(newPet);

    }catch(error){
        debug(error);
        return res.status(500).json({error: "error interno del servidor"})
    }
}

//find by id
controller.findById = async (req, res) => {
    const { identifier } = req.params;

    const pet = await Pet.findById(identifier);

    if(!pet){
        return res.status(400).json({
            error: "La mascota no se encuentra asegurese de que el id sea el correcto"
        })
    }

    return res.status(200).json(pet);
}

module.exports = controller;