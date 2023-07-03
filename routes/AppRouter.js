const Router = require(`express`).Router();

const postRouter = require('./postRouter')
const userRouter = require('./userRouter')
const adminRouter = require('./adminRouter')

Router.use('/posts', postRouter)
Router.use('/users', userRouter)
Router.use('/admin', adminRouter)
Router.get("/", (req, res) => res.send('in NEW YOOOOOOOOOORK!'));


module.exports = Router;


