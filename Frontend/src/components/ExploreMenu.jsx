import React from 'react'
import { menu_list } from '../assets/frontend_assets/assets'

const ExploreMenu = ({category,setCategory}) => {
return (
    <div className='flex flex-col gap-4' id='menu'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-4xl font-bold text-[#262626] '>Explore Our Menu</h1>
            <p className='max-w-[80vw] sm:max-w-[60vw] text-[#262626]'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        </div>
        <div className='flex justify-between sm:gap-10 gap-5 text-center overflow-scroll'>
            {menu_list.map((item,index) => {
                return(
                    <div key={index} onClick={()=> setCategory(prev => prev === item.menu_name ? "All" : item.menu_name )} className='items-center justify-center sm:min-w-40 min-w-28  flex flex-col gap-3'>
                        <img src={item.menu_image} className={`md:w-40 w-full px-3 cursor-pointer ${category === item.menu_name ? "border-4 p-3 border-orange-600 rounded-full border-solid" : ""}`} alt="" />
                        <p className='text-[#747474] text-xl'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr className='border-[1.5px] border-[#747474] m-2 rounded'/>
    </div>
)
}

export default ExploreMenu

// prev === item.menu_name ? "All" : item.menu_name:
// If the current category is the one you clicked on (for example, you clicked on "Pizza" and the current category is already "Pizza"), it will set the category to "All" (deselecting it).
// If the current category is different (you click on "Burger" but the current category is "Pizza"), it will set the category to "Burger" (selecting it).