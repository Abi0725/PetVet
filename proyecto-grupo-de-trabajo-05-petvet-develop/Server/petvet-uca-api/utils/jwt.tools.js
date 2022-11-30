const jwt =  require("jsonwebtoken");

//variables de entorno
const secret = process.env.TOKEN_SECRET || "SuperSecret";
const exptime = process.env.TOKEN_EXP || "15m";

const tools = {};

tools.createToken = (_id) =>{
    return jwt.sign({ userId: _id }, secret, { expiresIn: exptime });
}

tools.verifyToken = (token) => {
    try{
        return jwt.verify(token, secret);
    }catch(error){
        return false;
    }
}
module.exports = tools;