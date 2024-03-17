const mongoose  = require('mongoose')

const {Schema} = mongoose;

//create schema object for menu items;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        minlength: 3
    },
    recipe:{
        type:String,
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
    },
    category:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
},{
   
})

const Menu = mongoose.model('Menu', menuSchema)
module.exports = Menu;