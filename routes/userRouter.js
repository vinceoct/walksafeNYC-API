const Router = require('express').Router()

const controller = require('../controllers/userController.js')



Router.get('/', controller.getAllUsers)
Router.get('/: name', controller.getUserByName)
Router.put('/', controller.createUser)
Router.put('/:id', controller. updateUserById)
Router.delete('/:id', controller.deleteUser)



module.exports = Router