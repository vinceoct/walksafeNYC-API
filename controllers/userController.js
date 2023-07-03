const { UserAccount } = require('../Models')
const userAccountSchema = require('../Models/userAccount')


////// Find all users  //////

const getAllUsers = async (req, res) => {
     const everyUser = await UserAccount.find()
     res.json(everyUser)
}


////// Find by name  //////


const getUserByName = async (req, res) => {
     try{
         const {first_name} = req.params
         console.log(first_name)
         const userName = await UserAccount.findOne({first_name})
         if (!userName) throw Error('Account not found!')
         res.json(userName)
     } catch (e){
         console.log(e)
         res.send('Account not found')
     }
 }


////// Find by user id  //////

     const getUserById = async (req, res) => {
     try{
          const {user_account} = req.params 
          const userId = await UserAccount.findOne({user_account})
          if (!userId) throw Error('Account not found')
          res.json(userId)
     } catch (e) {
          console.log(e)
          res.send('Account not found')
     }
     }


   ////// Create User  //////


   const createUser = async  (req, res, collection ) => {
     try { 
          const newUser = new UserAccount(req.body)
          await collection.insertOne(newUser)
          return res.json(newUser)
     } catch (e) {
          console.log(e)
          res.status(500).send('Error! Failed to create new user')
     }
     }

 
   ////// Update User //////

     const updatObjectById = async ( req, res, collection) => {
          try { 
               const { id } = req.params
               const updateUser =  await collection.findByIdAndUpdate(id, req.body, { new: true,})
               return res.json(updateUser)
          } catch (e) {
               console.log(e)
               res.status(500).send('Error! Failed to update user')
          }
          }
          
     const updateUserById = async (req, res) => {
          updatObjectById(req, res, UserAccount)
     }

     ////// Update User //////



     const deleteObjectById= async ( req, res, collection) => {
          try { 
               const { id } = req.params
               const deleteUser =  await collection.findByIdAndDelete(id, req.body, { new: true,})
               return res.json(deleteUser)
          } catch (e) {
               console.log(e)
               res.status(500).send('Error! Failed to delete user')
          }
          }

     const deleteUser = async (req, res) => {
          deleteObjectById(req, res, UserAccount)
     }


 module.exports= {
     getAllUsers,
     getUserById,
     getUserByName,
     createUser,
     updateUserById,
     deleteUser

 }