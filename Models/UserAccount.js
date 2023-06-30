const { Schema } = require('mongoose')

const useraccountSchema = new Schema (
{
    user_account: {type: Number, required: true},
    first_name:{type: String, required: true}, 
    last_name:{type: String, required: true},
    eamil:{type: String, required: true},
    passwaord:{type: String, required: true},
    date_of_birth:{type: String, required: true},
    gender:{type: String, required: true},

    
},
{
    timeseries: true
}

)

module.exports = useraccountSchema