const { UserAccount } = require('../models')
const userAccountSchema = require('../models/userAccount')

////// Find by user id  //////

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
 



