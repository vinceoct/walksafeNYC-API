const { Schema } = require('mongoose')

const postSchema = new Schema (
{
    lat:{type: Number, require: true},
    lon:{type: Number,  require: true },
    post_date: {type: String, required: true},
    post_time: {type: String, required: true}, 
    user_account:{type: Schema.Types.ObjectId, ref: 'UserAccount', required: true},
    incident_type:{ type: String, required: true},
    comment:{ type: String, required: true}
    
},
{
    timeseries: true
}

)

module.exports = postSchema 