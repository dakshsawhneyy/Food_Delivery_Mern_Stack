import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const AppDownload = () => {
return (
    <div className='text-center my-10' id='app-download'>
        <p className='text-2xl md:text-5xl font-semibold'>For Better Experience download <br/> Tomato App</p>
        <div className='flex gap-3 justify-center sm:mt-7 mt-4'>
            <img src={assets.play_store}  className='cursor-pointer w-36 md:w-auto hover:transform hover:scale-110 transition-all duration-500' alt="" />
            <img src={assets.app_store}  className='cursor-pointer w-36 md:w-auto hover:transform hover:scale-110 transition-all duration-500' alt="" />
        </div>
    </div>
)
}

export default AppDownload
