import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})  //empty parenthesis means that cartItems is an empty object
    const url = "http://localhost:5000"
    const [token, setToken] = useState("")

    const [food_list, setFood_list] = useState([])

    //!Complicated Add to cart
    const addToCart = async(itemId) => {
        try {
            if(!cartItems[itemId]){
                setCartItems((prev)=> ({...prev,[itemId]:1}))   //if item in cartItems is not present in cart, then first it'll save prev changes and then add the item by 1 using item id
            }else{
                setCartItems((prev)=>({...prev,[itemId]: prev[itemId]+1}))  //if item is already in cart, just add it by 1
            }
            //After making add to cart in backend   // if token is present, then 
            if (token) {
                await axios.post(`${url}/api/cart/add`,{itemId},{headers:{token}})
            }
        } catch (error) {
            console.log(error)
        }
    }

    const removeCart = async(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        // making removeFromCart api request
        if (token) {
            await axios.post(`${url}/api/cart/delete`,{itemId},{headers:{token}})
        }
    }

    //! Very Very complicated
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchFoodList = async() => {
        try {
            const response = await axios.get(`${url}/api/food/list`)
            setFood_list(response.data.allFood)
        } catch (error) {
            console.log(error)
        }
    }   

    const loadCartData = async(token) => {
        try {
            const response = await axios.post(`${url}/api/cart/list`,{},{headers:{token}}) //Empty because we dont have to send anything in body
            //Now we'll store this data in one variable i.e. cartItems(State)
            // console.log(response.data)
            //* is if-else ne 2 ghnate barbaad kiye😓
            if(response.data.success){
                setCartItems(response.data.cartData);
            }else{
                console.error('Failed to load cart data:', response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Making token save in browser local storage so that we doesnt get logged out once we reload the page
    useEffect(() => {
        const loadData = async() => {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem('token'))
                await loadCartData(localStorage.getItem('token'));
            }
        }
        loadData();
    },[])

    const contextValue = {
        food_list,
        cartItems,setCartItems,
        addToCart,removeCart,
        getTotalCartAmount,
        url,
        token,setToken
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;