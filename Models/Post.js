const { Schema } = require('mongoose')

const postSchema = new Schema (
{
    post_id:{type: Number, required: true},
    post_date: {type: String, required: true}, 
    post_time:{String, required: true},
    user_account:{type: String, required: true},
    status:{ type: Boolean, required: true},
    post_type:{ type: String, required: true},
    post_reply: { type: String, required: true}

    
},
{
    timeseries: true
}

)

module.exports = postSchema 