var express = require('express');
var router = express.Router();

const {
    getAllRecipes
} = require('./controller/recipeController');
const {
    createRecipe
} = require('./controller/recipeController');
const {
    updateRecipeById
} = require('./controller/recipeController');
const {
    deleteRecipeById
} = require('./controller/recipeController');


router.get('/', function (req, res) {
    getAllRecipes({})
        .then((payload) => {
            res.json({
                message: "success",
                payload
            })
        })
        .catch(error => {
            res
                .status(500)
                .json({
                    message: "Failure",
                    error: error.message
                })
        })
})

router.post('/create-recipe', function (req, res) {
    createRecipe(req.body)
        .then((payload) => {
            res
                .json({
                    message: "succes",
                    payload
                })
        })
        .catch(error => {
                res
                    .status(500)
                    .json({
                        message: "Failure",
                        error: error.message
                    })
            }

        )
})
router.put('/update-recipe-by-id/:/id', function (req, res) {
    res.json({
        message: "Successful Piping to update home page"
    })
})

router.delete('/delete-recipe-by-id/:/id', function (req, res) {
    res.json({
        message: "Successful Piping to delete home page"
    })
})

module.exports = router;