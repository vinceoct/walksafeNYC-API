const Router = require("express").Router();
const controller = require('../controllers/adminController.js')

Router.get('/', controller.getAdmins)
Router.get('/:id', controller.getAdminById)
Router.put('/', controller.createAdmin)
Router.delete('/:id', controller.deleteAdmin)

module.exports = Router;


