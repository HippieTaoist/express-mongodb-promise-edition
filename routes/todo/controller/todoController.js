const Todo = require('../model/Todo');



function getAllTodo(body) {

    return new Promise((resolve, reject) => {

        Todo.find(body)
            .then(payload => {
                resolve(payload);
            })
            .catch(err => {
                reject(err)
            })
    })

}

function createTodo(body) {

    return new Promise((resolve, reject) => {

        const newTodo = new Todo({
            todo: body.todo,
            isDone: body.isDone,
        })

        newTodo
            .save()
            .then((payload) => {
                resolve(payload);
            })
            .catch(err => {
                reject(err)
            })



    })
}

function updateTodo(id, body) {

    return new Promise((resolve, reject) => {

        Todo.findByIdAndUpdate(
                id,
                body, {
                    new: true
                }, )
            .then(payload => {
                resolve(payload)
            })
            .catch(err => {
                reject(err)
            })
    })

}

function deleteTodo(id) {
    return new Promise((resolve, reject) => {

        Todo.findByIdAndDelete(id)
            .then(payload => {
                resolve(payload)
            })
            .catch(err => {
                reject(err)
            })
    })
}



module.exports = {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo,
}