import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'         //it helps to hash password and add salt
import validator from 'validator'   //validator helps to verify is we have entered a valid email adress

//Login User
const loginUser = async(req,res) => {
    const { email,password } = req.body
    try {
        const user = await userModel.findOne({email})

        if (!user) {
            return res.json({success:false,message:"User Doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false, message:"Invalid Credentials"})
        }

        const token = createToken(user._id)
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)    //We randomly created a secret key which furthur makes password more secure
}

//Register user(SignUp)
const SignUpUser = async(req,res) => {
    
    const { name,email,password } = req.body    //We have not added there first in model because first we need password then we make it hash and then we'll pass it as hashedPassword

    try {
        //checking if user already has an account or email already exists   //use findOne instead of find
        const exists = await userModel.findOne({ email })
        if(exists){
            return res.json({success:false,message:"User already exists" })
        }

        //validating email and strong password  // validator.isEmail(email) checks if entered email address is correct or not
        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email address" })
        }

        if(password.length < 8){
            return res.json({success:false,message:"Password must be atleast 8 characters long" })
        }
        //Hashing user password
        const salt = await bcrypt.genSalt(10)   // We can use salt from (5 to 15)
        const hashedPassword = await bcrypt.hash(password,salt)     // it takes two inputs password and salt

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)     //creating a unique token as id
        res.json({success:true,token})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export { loginUser,SignUpUser }