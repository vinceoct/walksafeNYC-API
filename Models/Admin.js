const { Schema } = require('mongoose')

const adminSchema = new Schema (
{
    admin_id: {type: String, required: true},
    userName:{type: String, required: true}, 
    password:{type: String, required: true}
    
},
{
    timeseries: true
}

)

module.exports = adminSchema