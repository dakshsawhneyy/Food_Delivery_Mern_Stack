import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import PlaceOrder from './PlaceOrder'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {food_list,cartItems,removeCart,getTotalCartAmount,url} = useContext(StoreContext)
return (
    <div className='flex flex-col md:my-32 my-16'>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] px-4 item'>
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
        </div>
        <br className=''/>
        <hr className=''/>

        {food_list.map((item,index) => {
        if(cartItems[item._id]>0){
        return(          
                    <div key={index} className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-5 p-3 items-center border-b-2'>
                        <img src={`${url}/images/`+item.image} className='w-16' alt="" />
                        <p className=''>{item.name}</p>
                        <p className=''>₹{item.price}</p>
                        <p className=''>{cartItems[item._id]}</p>
                        <p className=''>₹{item.price * cartItems[item._id]}</p>
                        <p className='cursor-pointer text-red-700' onClick={()=> removeCart(item._id)}>X</p>
                    </div>
        )}
        })}
        <div className='sm:flex-row justify-between mt-28 px-10 flex flex-col-reverse gap-20'>
            <div className=''>
                <h2 className='font-semibold text-2xl'>Cart Totals</h2>
                <div className='flex sm:w-[20vw] p-4 mt-4'>
                    <p>Subtotal</p>
                    <p className='ml-auto'>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className='flex p-4'>
                    <p>Delivery Fee</p>
                    <p className='ml-auto'>₹{getTotalCartAmount()===0 ? 0 : 5}</p>
                </div>
                <hr/>
                <div className='flex p-4'>
                    <p className='font-semibold'>Total</p>
                    <p className='font-semibold ml-auto'>₹{getTotalCartAmount()===0 ? 0 : getTotalCartAmount() + 5}</p>
                </div>
                <Link to='/order'><button className='px-4 py-2 rounded text-white bg-orange-600 mt-4'>Proceed To Checkout</button></Link>
            </div>
            <div className='flex flex-col gap-3'>
                <p className=''>If you have a promo code, Enter it here:</p>
                <div className='flex'>
                    <input type="text" placeholder='Promo Code' className='px-2 w-56 border h-10 rounded bg-[#ddd] border-[#ddd]'/>
                    <button className='border px-4 hover:bg-orange-600 hover:delay-100 rounded transition-all hover:text-white bg-black text-white'>Submit</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default Cart
