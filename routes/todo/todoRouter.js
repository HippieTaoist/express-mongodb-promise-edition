var express = require('express');
var router = express.Router();
const {
    getAllTodo
} = require('./controller/todoController')
const {
    createTodo
} = require('./controller/todoController')
const {
    updateTodo
} = require('./controller/todoController')
const {
    deleteTodo
} = require('./controller/todoController')

/* GET home page. */
router.get('/', function (req, res, next) {
    getAllTodo({})
        .then((payload) => {
            res.json({
                message: "success",
                payload
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failure",
                error: error.message
            });
        })
})

router.post('/create-todo/', function (req, res, next) {
    createTodo(
            req.body
        )
        .then((payload) => {
            res.json({
                message: "success",
                payload
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failure",
                error: error.message
            })
        })
})

router.put('/update-todo-by-id/:id', function (req, res, next) {
    updateTodo(req.params.id, req.body)
        .then((payload) => {
            res.json({
                message: "Success",
                payload
            })
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    message: "Failure",
                    error: error.message
                })
        })
})

router.delete('/delete-todo-by-id/:id', function (req, res, next) {
    deleteTodo(req.params.id)
        .then((payload) => {
            if (payload === null) {
                res.json({
                    message: "No Such Id Found",
                    payload
                })

            } else {
                res.json({
                    message: "Success",
                    payload
                })
            }
        })
        .catch((error) => {
            res
                .status(500)
                .json({
                    message: "Failure",
                    error: error.message
                })
        })

})

module.exports = router;