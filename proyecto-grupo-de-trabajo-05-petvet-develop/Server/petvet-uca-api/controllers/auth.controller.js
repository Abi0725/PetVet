const User = require("../models/User.model");
const debug = require("debug")("app:auth-controller");

const ROLES = require("../data/roles.constants.json");
const generator = require("../data/code.generator");


const { createToken, verifyToken } = require("../utils/jwt.tools")

const controller = {};

controller.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = await User.findOne({ $or: [{ username: username }, { email: email } ]});

        if(user) {
            return res.status(409).json({ error: "Este usuario ya existe" })
        }

        const newUser = new User({
            username: username,
            email: email,
            password: password,
            roles: [ROLES.USER],
            code: generator(8),
        });

        await newUser.save();
         
        return res.status(201).json({ message: " Usuario creado con exito" })
    }catch(error){
        debug({ error });
        return res.status(500).json({ message: "Error inesperado" })
    }
}

controller.login = async(req, res) => {
    try {
        const { identifier, password } = req.body;

        const user = await User.findOne({ $or: [{ username: identifier }, { email: identifier }]  });

        if(!user){
            return res.status(404).json({ error: "el usuario no existe" });
        }

        if(!user.comparePassword(password)){
            return res.status(401).json({ error: "Password incorrecta con coinciden" });
        }

        const token = createToken(user._id);
        user.tokens = [token, ...user.tokens.filter(_token => verifyToken( _token )).splice(0, 4)];

        await user.save();

        return res.status(200).json({ token: token });
    }catch(error){
        debug(error);
        return res.status(500).json({ message: "Error inesperado" })
    }
}

controller.whoami = async (req, res) => {
    try {
      const { _id, username, email, roles, code, pets} = req.user;
      return res.status(200).json({ _id, username, email, roles, code, pets });
    } catch (error) {
      debug(error);
      return res.status(500).json({ error: "Error inesperado" })
    }
  }

module.exports = controller;