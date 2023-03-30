const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    eventid:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    teamname: {
        type: String,
    },
    emails: {
        type: [{
            email: {
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        }],
        required: true,
    },
    leader:{
        type:{
            email: {
                type:String,
                required:true
            },
            name:{
                type:String,
                required:true
            }
        },
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model('Team', TeamSchema)