const mongoose = require('mongoose')


const AnimalSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    },

    weight: {
        type: Number
    },
    isFurry: {
        type: Boolean
    }
}, {timestamps: true}) 



const Animal = mongoose.model('Animal', AnimalSchema)

module.exports = Animal;