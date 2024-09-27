//It is used to decode the token
import jwt from "jsonwebtoken";

const authMiddleware = async(req,res,next) => {
    const {token} = req.headers;    //In thundercliend add token in header section
    if (!token) {
        return res.json({success:false, message:"Not Authorized Login Again"})
    }
    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = tokenDecode.id    // Once token is verified and decoded, it takes the decoded token as id which then adds to req.body which can be furthur remove or add data in the cart
        next();      //It says "The user is authenticated, so let's keep going."
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"error"})
    }
}

export default authMiddleware;