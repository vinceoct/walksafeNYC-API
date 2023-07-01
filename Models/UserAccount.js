const { Schema } = require('mongoose')

const userAccountSchema = new Schema (
{
    
    first_name:{type: String, required: true}, 
    last_name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    date_of_birth:{type: String, required: true},
    gender:{type: String, required: true},

    
},
{
    timeseries: true
}

)

module.exports = userAccountSchema