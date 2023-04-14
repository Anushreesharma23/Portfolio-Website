const mongoose = require('mongoose');

const Schema = mongoose.Schema

const UserSchema = new Schema({
    Name: {
        type: String,
        required: [true, "Name is required"]
    }, 
    Email: {
        type: String,
        required: [true, "Email is required"]
    },
    WorkOpportunities: {
        type: String,
        required: [true, "Work Opportunities is required"]
    }
})

const UserModel = mongoose.model("getInTouch", UserSchema)

module.exports = UserModel;