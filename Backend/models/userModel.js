import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ type:String, required:true },
    email:{ type:String, required:true, unique:true },
    password:{ type:String, required:true },
    cartData: { type:Object, default:{}}
},{minimize:false}) //if we not add minimize:false then cart data will not be added because we have not added any data in cartData

const userModel = mongoose.models.user || mongoose.model("user", userSchema)    //First check if there is user folder in mongoose, if not then it'll create on basis of model and then after creating it'll just add up in that folder

export default userModel;