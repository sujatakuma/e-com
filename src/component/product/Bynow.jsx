import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Bynow = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setProducts(data);
      setLoading(false)
    }
    fetchProductDetails();
  }, []);

  const Loading = () => {
    return (
      <>
        Loading..
      </>
    )
  }
  const ShowProduct = () => {
    return (
      <>
        
        <div className='flex font-poppins mt-[5rem] m-4'>
          <div className=''>
            <img className='' src={products.image}></img>
          </div>
          <div className='m-4  w-9/12'> 
            <div className='text-md font-normal font-poppins'>{products.title}</div>
            <div className='text-[14px] text-gray-600 not-italic' >{products.description}</div>
            <div>{products.rating?.rate}⭐️ ({products.rating?.count} reviews)</div>
            <div>Rs. {products.price}</div>
            <div>Quantity:{products.quandity}</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      <div>
        <div>{loading ? <Loading /> : <ShowProduct />}</div>
      </div>

    </div>
  );
}

export default Bynow;

