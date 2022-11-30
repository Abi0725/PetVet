const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const ProceedingSchema = new Schema({
    date: {
        type: Date,
        trim: true,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    reason: {
        type: String,
        trim: true,
        required: true,
    },
    treatment: {
        type: String,
        trim: true,
    },
    nextDate: {
        type: Date,
    }
}, { timestamps: true });


module.exports = Mongoose.model("Proceeding", ProceedingSchema);