    import React, { useContext, useState } from 'react'
    import { assets } from '../assets/frontend_assets/assets'
    import { Link, useNavigate } from 'react-router-dom'
    import { StoreContext } from '../context/StoreContext'

    const Navbar = ({setShowLogin}) => {

        const { getTotalCartAmount,token,setToken } = useContext(StoreContext)
        let navigate = useNavigate();

        //Making state for dropdown when clicked on profile tag
        const [isOpen, setIsOpen] = useState(false)

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        const logOut = () => {
            localStorage.removeItem("token")
            setToken("");
            navigate("/")
        }

    return (
        <div className='flex gap-3 sm:justify-between px-4 pt-5 sm:px-0 items-center w-full h-[40px] sm:h-[50px]'>
            <Link to='/'><img src={assets.logo} className='sm:w-32 w-28' alt="" /></Link>
            <div className='sm:flex gap-2 text-xs sm:gap-8 sm:text-lg flex-shrink-0 sm:font-semibold hidden'>
                <Link to="/" className=''>Home</Link>
                <a href='#menu'>Menu</a>
                <a href="#app-download" className='hidden md:block'>Mobile-app</a>
                <a href="#footer">Contact Us</a>
            </div>
            <div className='flex gap-3 sm:gap-5 items-center ml-auto sm:m-0'>
                <img src={assets.search_icon} className='w-5 h-5 sm:h-6 sm:w-6 cursor-pointer' alt="" />
                <Link to='/Cart'>
                    <div className='relative px-3'>
                        <img src={assets.basket_icon} className='w-6 h-6 sm:h-6 sm:w-6 cursor-pointer' alt="" />
                        <div className={`${getTotalCartAmount() ? 'absolute min-h-2 min-w-2 bg-red-700 top-[-5px] right-[-5px] rounded' : ''}`}></div>
                    </div> 
                </Link>
                {/* if user is not logged in then he'll see sign in button and if he is logged in i.e he has token, so he'll see his profile */}
                {!token 
                ?   <button onClick={()=> setShowLogin(true)} className='bg-white border-2 border-solid border-orange-600 hover:bg-orange-600 hover:text-white transition-colors sm:px-3 sm:py-1 rounded font-semibold px-2 flex-shrink-0'>Sign in</button>
                :   <div className='relative z-10 flex flex-col items-center'>
                        <img src={assets.profile_icon} className='w-6 h-6 cursor-pointer' alt="Profile" onClick={toggleDropdown} //Made dropdown using chatGPT
                        />
                        {isOpen && (
                            <div className='absolute top-8 mt-2 bg-white border rounded shadow-lg'>
                                <div className='p-2 hover:bg-gray-100 flex items-center w-28 cursor-pointer'>
                                    <img src={assets.bag_icon} className='w-4 h-4 mr-2' alt="Orders" />
                                    <p>Orders</p>
                                </div>
                                <hr className='border-2' />
                                <div onClick={logOut} className='p-2 hover:bg-gray-100 flex items-center cursor-pointer'>
                                    <img src={assets.logout_icon} className='w-4 h-4 mr-2' alt="Logout" />
                                    <p>Logout</p>
                                </div>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    )
    }

    export default Navbar
