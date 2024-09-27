import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const Login = ({setShowLogin}) => {

    const { url,setToken,token } = useContext(StoreContext)
    
    const [currState, setcurrState] = useState("Login")

    //displaying signup and login in frontend to backend
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data=> ({...data,[name]:value}))    //it is used for changing state or updating state...[name]:value means that property with the name 'name' written in input would be changed to the new value 'value' 
    }
    //? This was to check that if the inputs are workin or not
    // useEffect(()=>{
    //     console.log(data)
    // },[data])   //we have written data in parenthesis because whenever data gets updated, this function will be executed

    const onLogin = async(e) => {
        e.preventDefault();
        
        //calling api's with help of axios
        const endpoint = (currState === "Login" ? 'login' : 'signup')
        try {
            const response = await axios.post(`${url}/api/user/${endpoint}`,data)   //data is the information that you want to send to the server when making an API request
            console.log(response.data)
            if (response.data.success) {
                // We have to make a component where we can store tokens, so lets create it in context...It will help in authentication as well as in navbar for removing sign in button when logged in
                setToken(response.data.token)
                localStorage.setItem("token",response.data.token)   //saving token to local storage of the browser
                setShowLogin(false)
            }else{
                alert(response.data.message)
            }
        } catch (error) {
            console.error("Error during authentication:", error);
        }
    }
return (
    <div className='absolute z-10 border-2 border-black w-full h-full items-center flex justify-center bg-[#00000090]'>
        <div className=''>
            <form onSubmit={onLogin} className='bg-white w-[300px] sm:w-[370px] p-7 flex flex-col gap-10 rounded' action="">
                <div className='flex items-center'>
                    <p className='text-2xl font-bold'>{currState}</p>
                    <img src={assets.cross_icon} onClick={()=> setShowLogin(false)} className='cursor-pointer ml-auto w-5 h-5 ' alt="" />
                </div>
                <div className='flex flex-col gap-5'>
                    {currState==='Login' ? <></> : <input name='name' onChange={handleChange} value={data.name} type="text" placeholder='Your Name'className='border-2 rounded px-2 py-1 border-[#c9c9c9]' ></input>}
                    <input type="text" name='email' value={data.email} onChange={handleChange} placeholder='Your Email'className='border-1 border-[#c9c9c9] border-2 rounded px-2 py-1'></input>
                    <input type="text" name='password' value={data.password} onChange={handleChange} placeholder='Password'className='border-1 border-[#c9c9c9] border-2 rounded px-2 py-1'></input>
                </div>
                <button type='submit' className='h-10 bg-orange-500 rounded text-white'>{currState==="Sign Up" ? "Create Account" : "Login"}</button>
                <div className='flex gap-3 items-center px-5'>
                    <input type="checkbox" required className='sm:h-7 sm:w-7 w-10 h-10 cursor-pointer'/>
                    <p className='text-sm'>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState==="Sign Up" ? <p>Already have an account?<span className='cursor-pointer text-orange-600 font-semibold' onClick={()=> setcurrState("Login")}> Login</span></p> :<p>Create a new account?<span className='cursor-pointer text-orange-600 font-semibold' onClick={()=> setcurrState("Sign Up")}> Click Here</span></p>}
            </form>
        </div>
    </div>
)
}

export default Login;