// We have to make cart for indvijual account so that person of particular token can store his particular items     //In frontend we have created cart that can be assesed by anybody
import userModel from "../models/userModel.js";

//add items to user cart
const addToCart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)   //That req.body can be used to verify if same user id is same as token id   // this function looks in the database that if id of user matches the userId
        let cartData = await userData.cartData;     //This retrives user's current data //cartData is object that we created in userModel
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;  //if we want to add one thing in cart and it is not present there i.e item is not present in cartData, just make a new entry of it with help of itemId
        }else{
            cartData[req.body.itemId] += 1; //Add the no. of items  if the item is already there in cart
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"Added To Cart"})
    } catch (error) {
        console.log(error)
        res.send({success:false, message:"Error occured"})
    }
}
//Can check in thunderclient after putting token inn header and in body, add value of {"itemId:"75..."}

//remove items from user cart
const removeFromcart = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData  //from the user data we have stored the variables in the cartData function
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message:"Item Removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error Occured"})
    }
}

//Fetch user cart data
const getCartData = async(req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId)
        let cartData = userData.cartData;
        res.json({success:true, cartData})  //cartdata will list all the objects present in it
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error Occured"})
    }
}

export { addToCart,removeFromcart,getCartData }