import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const product = products.find(item => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img 
                key={index} 
                src={item} 
                onClick={() => setImage(item)} 
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' 
                alt='' 
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt='' />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} className='w-3' alt='' />
            ))}
            <img src={assets.star_dull_icon} className='w-3' alt='' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{productData.price} {currency}</p>
          <p className='mt-5 text-gray-500 w-4/5 whitespace-pre-line'>
            {showFullDescription ? productData.description : `${productData.description.substring(0, 200)}... `}
            <span 
              className='text-blue-600 cursor-pointer' 
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Show Less' : 'Read More'}
            </span>
            
             </p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button 
                  key={index} 
                  onClick={() => setSize(item)} 
                  className={`border py-2 px-4 ${item === size ? 'border-orange-500' : 'bg-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button 
            onClick={() => addToCart(productData._id, size)} 
            className='bg-black uppercase text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            Add to Cart
          </button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% original products</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>;
};

export default Product;
