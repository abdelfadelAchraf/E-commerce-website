import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";



const RelatedProducts = ({category , subCategory}) => {
  const {products} = useContext(ShopContext);

  const [related , setRelated] = useState([]);

  useEffect(()=>{
     if(products.length > 0 ){
      const filteredProducts = products
        .filter((item) => item.category === category && item.subCategory === subCategory)
        .slice(0, 5); // Get only the first 5 products

      setRelated(filteredProducts); // Update related products state

    }
  }, [category, subCategory, products]); // Add category and subCategory to dependencies

  return (
    <div className='my-24'>
     <div className='text-center text-3xl py-2'>
      <Title txt1={'RELATED'} txt2={'PRODUCTS'}/>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {related.length > 0 ? (
            related.map((item, index) => (
              <ProductItems
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
      </div>
     </div>
  </div>

  )
}

export default RelatedProducts