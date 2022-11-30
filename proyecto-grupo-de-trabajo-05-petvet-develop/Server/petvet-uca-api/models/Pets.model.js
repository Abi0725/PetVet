const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        required: [true, "el nombre de la mascota es requerido"],
        trim: true,
    },
    species: {
        type: String,
        required: true,
        trim: [ true, "la especie de la mascota es requerida"],
    },
    breed: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    age: {
        type: Number,
    },
    birthday: {
        type: Date,
    },
    proceedings: {
        type: [Schema.Types.ObjectId],
        ref: "Proceeding",
        default: []
    },
}, {timestamps: true});


module.exports = Mongoose.model("Pet", PetSchema);