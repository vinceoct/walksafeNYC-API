const mongoose = require('mongoose')
const adminSchema = require('./admin')
const postSchema = require('./Post')
const useraccountSchema = require('./useraccout')


const Admin = mongoose.model('Admin', adminSchema)
const Post = mongoose.model('/Post', postSchema)
const Useraccount = mongoose.model('/Useraccount', useraccountSchema)

module.exports = {
    Admin,
    Post,
    Useraccount 
}