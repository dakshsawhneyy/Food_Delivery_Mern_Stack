import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
return (
    <>
    <div className='flex flex-col md:flex-row md:justify-evenly md:items-center bg-[#323232] sm:h-[300px] md:h-[350px] lg:h-[250px] p-10 mt-6 text-[#d9d9d9] gap-5' id='footer'>
        <div className='md:max-w-[40vw]'>
            <img src={assets.logo} alt="" />
            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, explicabo animi consequuntur ut error adipisci velit sapiente odio eius cupiditate tempore sed voluptas excepturi itaque aut ad assumenda atque rerum.</p>
            <div className='flex gap-5'>
                <img src={assets.facebook_icon}  className='cursor-pointer hover:bg-orange-600 hover:rounded-full transition-all duration-150 ease-in-out' alt="" />
                <img src={assets.twitter_icon}  className='cursor-pointer hover:bg-orange-600 hover:rounded-full ransition-all duration-150 ease-in-out' alt="" />
                <img src={assets.linkedin_icon}  className='cursor-pointer hover:bg-orange-600 hover:rounded-full ransition-all duration-150 ease-in-out' alt="" />
            </div>
        </div>
        <div className=''>
            <h2 className='text-2xl font-bold mb-2'>COMPANY</h2>
            <div className='flex flex-col gap-2'>
                <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>About Us</p>
                <p className='cursor-pointer'>Delivery</p>
                <p className='cursor-pointer'>Privacy Policy</p>
            </div>
        </div>
        <div className=''>
            <h2 className='text-2xl font-bold mb-5'>GET IN TOUCH</h2>
            <div>
                <p>+1-212-456-789</p>
                <p>contact@tomato.com</p>
            </div>
        </div>
    </div>
    <hr className='h-[2px] outline-none border-none bg-orange-600 w-[80%] m-auto '/>
    <p className='justify-center bg-[#292929] text-[#d9d9d9] h-10 flex items-center'>Copyright 2024 @ Tomato.com - All Right Reserved.</p>
    </>
)
}

export default Footer
