const Router = require("express").Router();
const controller = require('../controllers/adminController.js')

Router.get('/', controller.getAdmins)
Router.get('/:id', controller.getAdminById)

module.exports = Router;


