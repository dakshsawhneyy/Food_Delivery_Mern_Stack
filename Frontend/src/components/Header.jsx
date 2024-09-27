import React, { useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Header = () => {
    
    const [animate, setAnimate] = useState(true)

    useEffect(()=>{
        const timer = setTimeout(() => {
            setAnimate(false)
        }, 1500);

        return()=> clearTimeout(timer)
    },[])

return (
    <div className=''>
        <div className= {`relative ${animate ? 'animate-bounce' : 'animate-none'} mt-[30px]`}>
            <img src={assets.header_img} className='h-[40vw] bg-cover ' alt="" />
            <div className='absolute left-[6vw] bottom-[10%] sm:p-3 flex flex-col gap-[1.5vw] md:max-w-[50%] max-w-[80vw]'>
                <p className='sm:font-semibold sm:text-2xl md:text-7xl text-white'>Order your favourite food here</p>
                <p className='text-white text-xs sm:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere optio minus fuga. Ea eius quos quaerat quam tempore molestias ipsum eum porro excepturi quas, corrupti rerum provident, natus exercitationem nesciunt.</p>
                <button className='w-24 py-1 sm:py-2 sm:w-28 rounded bg-white border-2 border-solid border-orange-600 hover:bg-orange-600 hover:text-white transition-colors'>View Menu</button>
            </div>
        </div>
    </div>
)
}

export default Header

    