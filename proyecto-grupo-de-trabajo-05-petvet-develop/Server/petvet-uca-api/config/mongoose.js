const Mongoose = require("mongoose");
//libreria debug
const debug = require("debug")("app:mongoose");

//variables necesarioas
//o se definen en las variables de entorno o toma las que 
//hemos puesto por defecto
const dbhost = process.env.DBHOST || "localhost";
const dbport = process.env.DBPORT || "27017";
const dbname = process.env.DBNAME || "petvet-db";

const dburi = process.env.DBURI || "mongodb+srv://root:root@cluster0.ifm937h.mongodb.net/?retryWrites=true&w=majority";

//funcion de conexion
const connect = async () => {
     debug(dburi);
   try{
        await Mongoose.connect(dburi);
        debug("Conexion a la base exitosa");
   }catch(error){
        debug("error en la conexion de la base");
        //cerrar directamente el servidor
        process.exit(1);
   }
}

module.exports = {
    connect
}

//recibe una uri de conexion
//Mongoose.connect()