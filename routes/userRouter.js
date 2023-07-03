const Router = require('express').Router()

const controller = require('../controllers/userController.js')

Router.get('/', controller.getAllUsers)
Router.get('/:first_name', controller.getUserByName)
Router.get('/:id', controller.getUserById)
Router.post('/', controller.createUser)
Router.put('/:id', controller. updateUserById)
Router.delete('/:id', controller.deleteUser)



module.exports = Router