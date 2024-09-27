import axios from "axios";
import React, { useEffect, useState } from "react";
import { url } from "../App";
import { toast } from "react-toastify";

const List = () => {
    const [data, setData] = useState([]);

    const fetchItems = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            if (response.data.success) {
                // console.log(response.data);
                setData(response.data.allFood); //can check by doing console.log or see in the backend
            } else {
                toast.error("Error Occured");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const removeItem = async(id) => {
        try {
            const response = await axios.delete(`${url}/api/food/delete`, { data: { id }})
            if ( response.data.success) {
                toast.warning("Song Deleted")
                await fetchItems();     //After deletion refresh list
            }
        } catch (error) {
            console.log(error)
            toast.error(error)
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);     //refresh list when page gets reloaded

    return (
        <div className="w-[80vw] p-6">
            <p className="text-2xl font-semibold">All Food Items</p>
            <div className="">
                <div className="hidden sm:grid sm:grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr] my-6 border-2 p-3">
                    <p>Image</p>
                    <p>Name</p>
                    <p>Price</p>
                    <p>Category</p>
                    <p>Action</p>
                </div>
                {data.map((item, index) => {
                    return (
                        <div className="gap-4 grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-[1fr_1.5fr_1fr_1fr_0.5fr] items-center border-[1px] border-gray-600 p-3" key={index}>
                            <img src={`${url}/images/${item.image}`} className="w-16" alt="" />
                            <p>{item.description}</p>
                            <p>₹{item.price}</p>
                            <p>{item.category}</p>
                            <p onClick={()=> removeItem(item._id)} className="bg-red-600 p-1 hidden sm:flex justify-center rounded text-white cursor-pointer w-24 ">Delete item</p>
                            <p className="bg-red-600 p-1 flex justify-center rounded text-white cursor-pointer sm:hidden w-8">X</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default List;
