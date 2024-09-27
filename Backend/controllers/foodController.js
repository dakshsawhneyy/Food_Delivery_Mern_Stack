import foodModel from "../models/FoodModel.js";
import fs from 'fs' //using fs instead of cloudinary to store files on local storage

// add food item
const addFood = async(req,res) => {

    let image_filename = req.file.filename

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.send({success:true,food})
    } catch (error) {
        console.log(error)
        res.send({success:false, message:"Error Occured"})
    }
}

//List food
const listFood = async(req,res) => {
    try {
        const allFood = await foodModel.find({})  //This is empty so that all songs gets displayed
        res.json({ success: true, allFood });
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error Occured"})
    }
}

//Delete Food
const deleteFood = async(req,res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.send({success:true,message:"Food Deleted"})
    } catch (error) {
        console.log(error)
        res.send({success:false, message:"Error Occured"})
    }
}
export {addFood,listFood,deleteFood};