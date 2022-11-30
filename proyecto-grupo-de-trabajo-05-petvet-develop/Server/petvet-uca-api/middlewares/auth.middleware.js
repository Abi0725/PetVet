
const { verifyToken } = require("../utils/jwt.tools");
const debug = require("debug")("app:auth-middleware");

const User = require("../models/User.model");

const ROLES = require("../data/roles.constants.json");

const middlewares = {};

const tokenPrefix = "Bearer"

middlewares.authentication = async (req, res, next) => {
    try{
        //paso 01 verificar q authoritation exista
        const { authorization } = req.headers;

        if(!authorization){
            return res.status(401).json({ error: "No autorizado" });
        }
        //paso 2 que sea un token valido
        const [prefix, token] = authorization.split(" ");

        if(prefix !== tokenPrefix){
            return res.status(401).json({ error: "No autorizado" });
        }

        if (!token) {
            return res.status(401).json({ error: "No autorizado" });
          }

        
        const tokenObject  = verifyToken(token);
        
        if (!tokenObject) {
            return res.status(401).json({ error: "No autorizado" });
          }

          const { userId } = tokenObject;
          debug(userId);

        //paso 3 obtener al usuario
        const user =  await User.findById(userId);

        if (!user) {
            return res.status(401).json({ error: "No autorizado" });
          }

        //paso 4 token registrado
        const isTokenValid = user.tokens.includes(token);

        if (!isTokenValid) {
          return res.status(401).json({ error: "No autorizado" });
        }

        //paso 5 modificar la req para tener la info de user
        req.user = user;
        req.token = token;

        //paso 6
        next();
    }catch(error){
        return res.status(500).json({ error: "Error inesperado de servidor" });
    }
}

middlewares.authorization = (roleRequired=ROLES.SYSADMIN) => {
  return (req, res, next) => {
    try {
      const { roles=[] } = req.user;

    const roleIndex = 
        roles.findIndex(role => (role === roleRequired || role === ROLES.SYSADMIN));

    if(roleIndex < 0){
      return res.status(403).json({
        error: "No tiene permiso de estar aqui"
      })
    }

    next();
    } catch (error) {
      debug({ error });
      return res.status(500).json({ error: "Error inesperado de servidor" });
    }
  }
}



module.exports = middlewares;