import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");

  const currency = '$';
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
  const navigate = useNavigate();


/*
const addToCart = async (itemId, size) => {
  if (!size) {
      toast.error("Select the size first!");
      return;
  }

  const token = localStorage.getItem("token");  // Get token from local storage
  if (!token) {
      toast.error("You need to log in first!");
      return;
  }

  const userId = await fetchUserId(token);  // Get userId from API
  if (!userId) {
      toast.error("User not found.");
      return;
  }

  // Now send userId to the backend
  try {
      const response = await axios.post("http://localhost:4000/api/cart/add", 
          { userId, itemId, size }, 
          { headers: { token } }
      );

      if (response.data.success) {
          toast.success("Item added to cart!");
      } else {
          toast.error(response.data.message);
      }
  } catch (error) {
      console.error(error);
      toast.error("Error adding item to cart.");
  }
};
*/


const addToCart = async (itemId, size) => {
  if (!size) {
      toast.error("Select the size please.");
      return;
  }

  let cartData = JSON.parse(JSON.stringify(cartItems));

  if (!cartData[itemId]) {
      cartData[itemId] = {};
  }

  cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

  setCartItems(cartData);
 
  if (token) {
      try {
          // Send the itemId and size, the token is automatically included in the headers
          await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } });

          toast.success("Added successfully");
      } catch (error) {
          console.log(error);
          toast.error(error.message);
      }
  }
};

  

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          totalCount += cartItems[items][size];
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = JSON.parse(JSON.stringify(cartItems));

    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
      setCartItems(cartData);
      if (token) {
        try {
          await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } })

        } catch (error) {
          console.log(error)
          toast.error(error.message);
        }
      }

    }
  };
  const getCartAmount =  ()=>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=>product._id === items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount ;
  }

  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      console.log(response.data)
      if (response.data.success) {

        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.get(`${backendUrl}/api/cart/get`, {}, { headers: { token } });
      if (response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  useEffect(() => {
    getProductsData();
  }, []);


  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, [])
  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    backendUrl,
    token,
    setToken,
    navigate ,
    getCartAmount
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
