import express from "express";
import cors from 'cors'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/FoodRoute.js";
import userRouter from "./routes/UserRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
const app = express()
const port = 5000;

//middleware
app.use(express.json())
app.use(cors())

//mongoose connection
connectDB();

//* api endpoints
app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))    // for opening images in new tab using /images in url
//authentication api endpoints
app.use('/api/user',userRouter)
//Cart end points
app.use('/api/cart',cartRouter)     // Now using middleware to decode the token so that user with particular id can only se his cart
//PlaceOrder end points
app.use('/api/order',orderRouter)

app.get("/",(req,res)=>{
    res.send("API WORKING")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})