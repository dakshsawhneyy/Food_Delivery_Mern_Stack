import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
return (
    <div className='min-h-screen flex flex-col gap-6 w-[20vw] sm:w-[20vw] py-12 border-r-2 border-black'>
        <NavLink to='/add' className={({isActive}) => isActive ? 'bg-orange-500 text-white ml-auto h-12 rounded' : ''}><div className='ml-auto flex border-2 h-12 items-center gap-3 w-[15vw] px-3 py-3 rounded cursor-pointer border-black border-r-0 rounded-r-none'>
            <img src={assets.add_icon} className='w-8 h-8' alt="" />
            <p className='hidden sm:block'>Add Items</p>
        </div>
        </NavLink>
        <NavLink to='/list' className={({isActive}) => isActive ? 'bg-orange-500 text-white ml-auto h-12 rounded' : ''}><div className='ml-auto flex border-2 h-12 items-center gap-3 w-[15vw] px-3 py-3 rounded cursor-pointer border-black border-r-0 rounded-r-none'>
            <img src={assets.order_icon} className='w-8 h-8' alt="" />
            <p className='hidden sm:block'>List Items</p>
        </div>
        </NavLink >
        <NavLink to='/orders' className={({isActive}) => isActive ? 'bg-orange-500 text-white ml-auto h-12 rounded' : ''}>
        <div className='ml-auto flex border-2 h-12 items-center gap-3 w-[15vw] px-3 py-3 rounded cursor-pointer border-black border-r-0 rounded-r-none'>
            <img src={assets.order_icon} className='w-8 h-8' alt="" />
            <p className='hidden sm:block'>Orders</p>
        </div>
        </NavLink>
    </div>
)
}
export default Sidebar;