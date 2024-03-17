//get cart items using email

const Cart = require("../models/Cart");

const getCartByEmail = async(req,res)=>{
    try {
        const email = req.query.email
        console.log(email)
        const query = {email:email}
        const result = await Cart.find(query).exec()
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

///post cart items

const addToCart = async(req,res)=>{
    const {menuItemId, name, recipe, image, price, quantity, email} = req.body;
    try {
       //existing menu item
       const existingCartItem = await Cart.findOne({menuItemId})
       if(existingCartItem){
            return res.status(400).json({message:"Product already exist"})
       }
       
       const cartItem = await Cart.create({menuItemId, name, recipe, image, price, quantity, email})
       res.status(201).json(cartItem)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

//delete cart item

const deleteCart = async(req,res)=>{
    const cartId = req.params.id;
    try {
        const deletedCart = await Cart.findByIdAndDelete(cartId)
        if(!deletedCart){
            return res.status(401).json({message:"Cart item not found"})
        }
        res.status(201).json({message:"Cart Item successfully deleted"})
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

//update a cart item
const updateCart = async(req,res)=>{
    const cartId = req.params.id;
    const {menuItemId, name, recipe, image, price, quantity, email} = req.body;
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            cartId, {menuItemId, name, price, recipe, image, quantity, email},{
                new:true, runValidators:true
            }
        )
        if(!updatedCart){
            return res.status(404).json({message:"Cart item not found"})
        }
        res.status(201).json(updatedCart)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

//get single cart
const getSingleCart = async(req,res)=>{
    const cartId = req.params.id;
    try {
        const cartItem = await Cart.findById(cartId)
        res.status(201).json(cartItem)
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
module.exports = {
    getCartByEmail,
    addToCart,
    deleteCart,
    updateCart,
    getSingleCart
}