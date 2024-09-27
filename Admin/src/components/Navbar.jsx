import React from 'react'
import { assets } from '../assets/admin_assets/assets'

const Navbar = () => {
return (
    <>
    <div className='sm:px-[6rem] px-10 py-3'>
        <div className='flex justify-between items-center'>
            <img src={assets.logo} className='sm:w-auto w-40' alt="" />
            <img src={assets.profile_image} className='w-12 h-12' alt="" />
        </div>
    </div>
    <hr className='border-1 border-gray-600'/>
    </>
)
}

export default Navbar
