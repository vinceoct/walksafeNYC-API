const Router = require(`express`).Router();

const UserRouter = require('./userRouter')

Router.use('/users', UserRouter)



module.exports = Router;


