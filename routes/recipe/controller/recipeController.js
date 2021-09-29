const Recipe = require('../model/Recipe');

function getAllRecipes(body) {
    return new Promise((resolve, reject) => {
        Recipe
            .find(body)
            .then((payload) => {
                console.log(payload);
                if (payload == {}) {
                    return "nothing"
                } else {
                    resolve(payload)
                }
            })
            .catch(err => {
                reject(err)
            })
    })
}

function createRecipe(body) {
    return new Promise((resolve, reject) => {

        const newRecipe = new Recipe({
            recipe: body.recipe,
            date: body.date,
            price: body.price,
        })

        newRecipe
            .save()
            .then(payload => {
                resolve(payload)
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    getAllRecipes,
    createRecipe,
    //    deleteRecipeById,
    //     updateRecipeById,
}