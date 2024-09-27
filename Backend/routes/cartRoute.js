import express from 'express'
import { addToCart,removeFromcart,getCartData } from '../controllers/cartController.js'
import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add', authMiddleware, addToCart)
cartRouter.post('/delete', authMiddleware, removeFromcart)
cartRouter.post('/list', authMiddleware, getCartData)

export default cartRouter;