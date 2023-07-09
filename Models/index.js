const mongoose = require('mongoose')
const adminSchema = require('./Admin')
const postSchema = require('./Post')
const userAccountSchema = require('./UserAccount')


const Admin = mongoose.model('Admin', adminSchema)
const Post = mongoose.model('Post', postSchema)
const UserAccount = mongoose.model('UserAccount', userAccountSchema)

module.exports = {
    Admin,
    Post,
    UserAccount 
}