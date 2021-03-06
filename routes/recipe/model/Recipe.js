const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({

    recipe: {
        type: String
    },
    date: {
        type: Number
    },
    price: {
        type: Number
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("recipe", recipeSchema);