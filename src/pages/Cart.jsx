import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Cart = () => {
  const {products , currency , cartItems , updateQuantity } = useContext(ShopContext)

  const [cartData , setCartData ] = useState([]);


  useEffect(()=>{
     const tempData =[] ;
     for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size]
          });
        }
      }
    }

    // Update state with new cartData
    setCartData(tempData);

  }, [cartItems])
  return (
    <div className='border-t pt-14'>
        <div className='text-2xl mb-3'>
          <Title txt1={"YOUR"} txt2={"CART"}/>
        </div>

        <div>
          {
            cartData.map(( item, index) =>{

              const productData = products.find((product)=>product._id === item._id);

              return (
                <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                   <div className='flex items-start gap-6'>
                      <img className='w-16 sm:w-20' src={productData?.image[0]} alt="" />

                      <div>
                        <p className='text-xs sm:text-lg font-medium'>{productData?.name}</p> 
                        <div className='flex items-center gap-5 mt-2'>
                          <p className='text-xs sm:text-lg font-medium'>{productData.price}{currency}</p>
                          <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                      </div>
                      </div>
                     
                   </div>


                   <input onChange={(e)=>e.target.value == '' || e.target.value === '0' ? null : updateQuantity(item._id , item.size , Number(e.target.value))} className='border max-w-[10px] sm:max-w-20 px-1 sm:px-2 py-1' min={1} type="number" defaultValue={item.quantity} />
                   <img className='w-4 mr-4 sm:w-5 cursor-pointer hover:scale-90' src={assets.bin_icon} alt="" onClick={()=>updateQuantity(item._id , item.size , 0)} />
                </div>

                
              )
            })
          }
        </div>
    </div>
  )
}

export default Cart