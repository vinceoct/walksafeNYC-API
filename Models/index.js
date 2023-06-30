const mongoose = require('mongoose')
const adminSchema = require('./admin')
const postSchema = require('./post')
const userAccountSchema = require('./userAccount')


const Admin = mongoose.model('Admin', adminSchema)
const Post = mongoose.model('/Post', postSchema)
const UserAccount = mongoose.model('/UserAccount', userAccountSchema)

module.exports = {
    Admin,
    Post,
    UserAccount 
}