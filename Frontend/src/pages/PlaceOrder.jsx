import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'

const PlaceOrder = () => {
    const { getTotalCartAmount,token,food_list,cartItems,url } = useContext(StoreContext)

    // Making state to store all information in it
    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setData(data => ({...data,[name]:value}))
    }

    // useEffect(() => {
    //      console.log(data)    //  It is used to see what we enter in the input required ;
    // },[data])

    const placeOrder = async(e) => {
        e.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if(cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id]; //through this we'll get all quantity of product because of its id
                orderItems.push(itemInfo)
            }
        })
        // console.log(orderItems)     // check items which are in cart currently
        let orderData = {
            address:data,
            items:orderItems,
            amount:getTotalCartAmount() + 5     // 2 is the delivery charge
        }
        let response = await axios.post(`${url}/api/order/placeorder`,orderData,{headers:{token}})
        console.log('API Response:', response.data);
        if (response.data.success) {
            const {session_url} = response.data;
            window.location.replace(session_url);
        }else{
            alert("Error")
        }
    }

return (
    <form onSubmit={placeOrder} className='flex flex-col sm:flex-row justify-between my-24 sm:px-10 px-4 gap-16'>
        <div className='flex flex-col gap-5'>
        <p className='text-3xl font-semibold mb-8'>Delivery Information</p>
            <div className='flex gap-3'>
                <input required  type="text" onChange={handleChange} name='firstName' value={data.firstName} placeholder='First Name' className='border-2 px-2 py-2 rounded w-44 sm:w-auto' />
                <input required  type="text" onChange={handleChange} name='lastName' value={data.lastName} placeholder='Last Name' className='border-2 px-2 py-2 rounded w-44 sm:w-auto' />
            </div>
            <input required  type="text" onChange={handleChange} name='email' value={data.email} placeholder='Email address' className='border-2 px-2 py-2 rounded' />
            <input required  type="text" onChange={handleChange} name='street' value={data.street} placeholder='Street' className='border-2 px-2 py-2 rounded w-auto' />
            <div className='flex gap-3'>
                <input required  type="text" onChange={handleChange} name='city' value={data.city} placeholder='City' className='border-2 px-2 py-2 rounded w-44 sm:w-auto' />
                <input required  type="text" onChange={handleChange} name='state' value={data.state} placeholder='State' className='border-2 px-2 py-2 rounded w-44 sm:w-auto' />
            </div>
            <div className='flex gap-3'>
                <input required  type="text" onChange={handleChange} name='zipcode' value={data.zipcode} placeholder='Zip code' className='border-2 px-2 py-2 rounded w-44 sm:w-auto' />
                <input required  type="text" onChange={handleChange} name='country' value={data.country} placeholder='Country' className='border-2 px-2 py-2 rounded w-44 sm:w-auto' />
            </div>
            <input required  type="text" onChange={handleChange} name='phone' value={data.phone} placeholder='Phone' className='border-2 px-2 py-2 rounded' />
        </div>
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
                <button type='submit' className='px-4 py-2 rounded text-white bg-orange-600 mt-4 w-full' >Proceed To Payment</button>
                
            </div>
    </form>
)
}

export default PlaceOrder
