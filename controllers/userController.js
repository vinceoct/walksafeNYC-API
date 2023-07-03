const { UserAccount } = require('../Models')

////// Find all users  //////

const getAllUsers = async (req, res) => {
     const everyUser = await UserAccount.find()
     res.json(everyUser)
}


////// Find by name  //////


const getUserByName = async (req, res) => {
     try{
         const { first_name } = req.params
         const regex = new RegExp(first_name, 'i')
         const userName = await UserAccount.findOne({ first_name: regex })
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
          const { id } = req.params 
          const userId = await UserAccount.findById(id)
          if (userId) {
          res.json(userId) 
     } else { return res.json(404).send('error')}
     } catch (e) {
          console.log(e)
          res.send('Account not found')
     }
     }


   ////// Create User  //////


   const createUser = async  (req, res, collection ) => {
     try { 
          const newUser = new UserAccount(req.body)
          await newUser.save()
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