const mongoose  = require('mongoose')

const {Schema} = mongoose;

const cartSchema = new Schema({
   
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
    quantity:{
        type:Number,
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    menuItemId:{
        type:String,
    }

},{
    timestamps:true
})

const Carts = mongoose.model("Cart", cartSchema);

module.exports = Carts;