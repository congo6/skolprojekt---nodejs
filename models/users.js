const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create user schema & model
const UserSchema = new Schema({
    name:{
        type:String,
        required: [true, 'Name field is required']
    },
    age: {
        type: Number
    },
    available: {
        type: Boolean,
        default:false
    }
    // add in geo location
});

const User = mongoose.model('user', UserSchema);

module.exports = User;