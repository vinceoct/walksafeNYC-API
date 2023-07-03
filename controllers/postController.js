const { Post } = require('../Models')
const postSchema = require('../Models/postSchema')


////// Find user by Name //////

const getUserById = async (req, res) => {
   
    try{
     const {user_account} = req.params 
     const userId = await Post.findOne({user_account})
     if (!userId) throw Error('Account not found')
     res.json(userId)
    } catch (e) {
         console.log(e)
         res.send('Account not found')
    }
 }


