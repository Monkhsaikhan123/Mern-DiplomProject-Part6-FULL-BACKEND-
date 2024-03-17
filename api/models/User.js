const mongoose  = require('mongoose')

const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        trim:true,
        minlength:3,
    },
    photoURL:{
        type:String,
    },
    role: {
        type: String,
        enum:['user', 'admin'],
        default:'user'
    },
    password: {
        type: String,
    }
},{
    timestamps: true
})

const User = mongoose.model('User', UserSchema)
module.exports = User;