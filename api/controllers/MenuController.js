const Menu = require("../models/Menu")

const getAllMenuItems = async(req, res) => {
    try {
        const menu = await Menu.find({}).sort({createdAt:-1})
        res.status(200).json(menu)
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// post new menu item
const postMenuItem = async(req, res) => {
    const newItem = req.body
    try {
        const result = await Menu.create(newItem)
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteMenuItem = async(req,res) => {
    const itemId = req.params.id
    try {
        const result = await Menu.findByIdAndDelete(itemId)
        if(!result){
            return res.status(401).json({message:"Menu item not found"})
        }
        res.status(200).json({message:"successfully deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

//get single menu item

const singleMenuItem = async(req,res)=>{
    const menuId = req.params.id;
    try {
        const menu = await Menu.findByIdAndUpdate(menuId)
        res.status(200).json(menu)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const updateMenuItem = async(req,res)=>{
    const menuId = req.params.id;
    const {name, recipe, price, image, category} = req.body;
    try {
        const updateMenu = await Menu.findByIdAndUpdate(menuId, {name, recipe, price, image, category},
            {new:true, runValidators:true} )
        if(!updateMenu){
            return res.status(404).json({message:"Menu item not found"})
        }
        res.status(201).json(updateMenu)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = {
    getAllMenuItems,
    postMenuItem,
    deleteMenuItem,
    singleMenuItem,
    updateMenuItem
}