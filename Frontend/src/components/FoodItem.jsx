import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({image,name,price,description,id}) => {

    const [animate, setAnimate] = useState(true)
    // const [itemCount, setItemCount] = useState(0)

    const {cartItems,addToCart,removeCart,url} = useContext(StoreContext)

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(false)
        }, 1500);
        return ()=> clearTimeout(timer)
    },[])

return (
    <div className={`sm:max-w-[280px] max-w-[370px] p-4 shadow-2xl bg-white rounded-lg cursor-pointer ${animate ? "animate-bounce" : ""} hover:transform hover:scale-105 sm:hover:scale-110 duration-500 hover:shadow-[0_0px_50px_rgba(237,_108,_26,_1)]`} >
        <img src={`${url}/images/`+image} className='w-full mb-4 object-cover h-[250px]' alt="" />
        <div className='relative'>
            <div className='flex items-center'>
                <h2 className='text-xl font-semibold'>{name}</h2>
                <img src={assets.rating_starts}  className='w-20 h-4 ml-auto'alt="" />
            </div>
            <p className='text-[#676767]'>{description}</p>
            <div className='flex'>
                <p className='text-orange-600 text-2xl mt-3'>₹{price}</p>
                <div className='ml-auto mt-auto border-orange-600 bg-white border-2 rounded-full  transition-all absolute bottom-36 right-2 p-1'>
                    {!cartItems[id]
                        ? <img src={assets.add_icon_white} onClick={()=> addToCart(id)} className='w-10' alt="" />
                        : <div className='flex gap-3 items-center'>
                            <img /*onClick={ ()=> setItemCount(prev=> prev-1) }*/ onClick={()=> removeCart(id)} src={assets.remove_icon_red} alt="" />
                            <p className=''> {cartItems[id]}</p>
                            <img  /* onClick={ ()=> setItemCount(prev=> prev+1) } */ onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
)
}

export default FoodItem;