import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
return (
    <div className='flex flex-col gap-5'>
        <h2 className='text-3xl font-bold'>Top dishes near you</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-auto gap-5 px-4 sm:px-0'>
            {food_list.map((item,index)=>{
                if (category==="All" || category===item.category) {
                    return <FoodItem key={index} name={item.name} id={item._id} image={item.image} description={item.description} price={item.price}/>
                }
            })}
        </div>
    </div>
)
}

export default FoodDisplay
