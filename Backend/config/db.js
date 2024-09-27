import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://dakshsawhney2:9622727121@cluster0.h52i1.mongodb.net/FoodDelivery').then(()=> console.log("Connected to mongoose successfully"))
}
