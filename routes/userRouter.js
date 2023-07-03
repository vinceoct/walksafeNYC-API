const Router = require('express').Router()

const controller = require('../controllers/userController.js')

Router.get('/', controller.getAllUsers)
Router.get("/:id", controller.getUserById);
Router.get('/name/:first_name', controller.getUserByName)
Router.post('/', controller.createUser)
Router.put('/:id', controller. updateUserById)
Router.delete('/:id', controller.deleteUser)



module.exports = Router