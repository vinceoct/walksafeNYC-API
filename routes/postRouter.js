const Router = require("express").Router();
const controller = require('../controllers/postController')

Router.get('/', controller.getAllPosts)
Router.get('/:id', controller.getPostById)
Router.post('/', controller.createPost)
Router.put('/:id', controller.updatePost)
Router.delete('/:id', controller.deletePost)
Router.get('/getPostsByUser/:userId', controller.getPostByUser)



module.exports = Router;