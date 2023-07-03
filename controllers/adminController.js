const { Admin } = require('../Models')

const getAdmins = async (req, res)=> {
    const admins = await Admin.find({})
    res.json(admins)
}