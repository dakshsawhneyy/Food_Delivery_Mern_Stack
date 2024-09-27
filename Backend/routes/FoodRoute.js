import express from "express";
import { addFood, deleteFood, listFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image Storage Engine(Multer)
const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,file,callback) => {
        return callback(null,`${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({ storage:storage })

foodRouter.post('/add',upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.delete('/delete',deleteFood)

export default foodRouter;