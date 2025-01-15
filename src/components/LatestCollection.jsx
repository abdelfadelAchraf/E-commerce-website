import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItems from './ProductItems';

const LatestCollection = () => {
  {/**--------get the products from the shopContext using the useContext HOOK------- */}
  const {products} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
     setLatestProducts(products.slice(0,10));
  },[])

  return (
   <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
          <Title txt1={'LATEST'} txt2={'COLLECTION'}/>
          <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt ullam pariatur iste quo, necessitatibus magnam quos voluptates.</p>
        </div>
        {/**----------------Rendiring products------------------ */}
      
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item , index )=>(
               <ProductItems key={index } id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }
        </div>

   </div>
  )
}

export default LatestCollection