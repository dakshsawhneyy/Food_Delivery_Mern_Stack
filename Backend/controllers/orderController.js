//! USING STRIPE 
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order for frontend
const placeOrder = async (req,res) => {

    const frontend_url = 'https://localhost:5173'

    try {
        const newOrder = new orderModel({
            userId:req.body.userId,  //When middleware decodes token into id, then we can use it as userId;
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();      //Saving newOrder in the database;
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});   //After saving, we are cleaning user's cart data after transaction

        //  Items that we are getting from user, we'll then use that items as line_items which are necessary for stripe payment
        const line_items = req.body.items.map((item)=>({
            price_data:{
            currency:"usd",
            product_data:{
                name:item.name
            },
            unit_amount: item.price * 100,   //(Multiply with 80 if want to convert it in rupees)
        },
        quantity: item.quantity
    }))

        //  One more entry added i.e. Delivery charges, it will be added to end of the line_items array
        line_items.push({
            price_data:{
                currency:"usd",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount: 2 * 100
            },
            quantity:1
        })

        // stripe.checkout.sessions.create is method call to stripe's api to create a new checkout session
        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({success:true,session_url:session})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export { placeOrder };