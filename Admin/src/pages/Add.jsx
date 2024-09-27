import React, { useEffect, useState } from 'react'
import { assets } from '../assets/admin_assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../App'

const Add = () => {

    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Salad"
    })
    const [image, setImage] = useState("");     //Image state has been created so that we can update state of image when uploaded.
    
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(data=>({...data,[name]:value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            //Sbse pehle ek formData create krlo phr usmei chize append krtey jao
            const formData = new FormData();
            formData.append("name",data.name)
            formData.append("description",data.description)
            formData.append("price",Number(data.price))
            formData.append("category",data.category)
            formData.append("image",image)
            const response = await axios.post(`${url}/api/food/add`,formData)   //formdata is the information that you want to send to the server when making an API request
            
            //After form is submitted, reset all things
            if (response.data.success) {
                setData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Salad"
                })
                setImage(false)
                toast.success("Food Item Added");
            }else{
                toast.error("Error occured")
            }
        } catch (error) {
            console.log(error)
        }
    }

    //Use to see whether our add api is working or not
    // useEffect(() => {
    //     console.log(data)
    // },[data])

return (
    <div className='w-[80vw] h-screen p-10 overflow-hidden'>
        <form action="" className='flex flex-col gap-10 h-screen' onSubmit={handleSubmit}>
            <div className='max-w-[200px] h-[150px] flex flex-col gap-4'>
                <p className='text-xl'>Upload Image</p>
                <input type="file" id="image" accept='image/*' onChange={(e) => setImage(e.target.files[0])} hidden required/>
                <label htmlFor="image" className='cursor-pointer'>
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} className='w-28 h-24 rounded' alt="" />
                </label>
            </div>
            <div className='flex flex-col gap-2'>
            <p>Product Name</p>
            <input type="text" onChange={handleChange} value={data.name} name='name' placeholder='Enter Name' className='px-3 py-2 w-[max(250px,25vw)] bg-transparent border-2 border-black rounded'/>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Product Description</p>
            <textarea type="text" onChange={handleChange} value={data.description} name='description' placeholder='Enter Description' className='px-3 py-2 w-[max(250px,25vw)] bg-transparent border-2 border-black   rounded'/>
            </div>
            <div className='flex gap-10'>
                <div className='flex flex-col gap-2'>
                    <p>Product Category</p>
                    <select name="" id="" className='px-3 py-2 w-[max(100px,10vw)] bg-transparent border-2 border-black rounded' onChange={handleChange} value={data.category}>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodles">Noodles</option>
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                <p>Product Price</p>
                <input type="Number" name='price' placeholder='₹20' onChange={handleChange} value={data.price} className='px-3 py-2 w-[max(100px,10vw)] bg-transparent border-2 border-black rounded' />
            </div>
            </div>
            
            <button className='px-3 py-2 w-[max(100px,10vw)] border-2 border-black rounded bg-black text-white'>ADD</button>
        </form>
    </div>
)
}
export default Add;