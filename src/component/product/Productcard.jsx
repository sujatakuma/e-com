import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Cardslicce';
import { Link } from 'react-router-dom';

const Productcard = () => {
  const [product, setProduct] = useState([]);
  // const [counter, setCounters] = useState((4))

  // const add=(()=>{
  //   setCounters(counter+1)
  // })
  // const remove=(()=>{
  //   setCounters(counter-1)
  // })
  // const [arr, setArr]=useState (["sujata", "22", "delhi"])
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetails = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setProduct(data);
    }
    fetchProductDetails();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));

  };

  

  return (
    <div className='flex gap-4 flex-wrap items-center font-poppins justify-between p-4'>
      {product.map((product) => (
        <div key={product.id} className='border items-center flex flex-col p-4 rounded-md shadow shadow-gray-300 group'>
          <img className='h-48 w-48 transform transition-transform duration-300 group-hover:scale-105' src={product.image} alt={product.title} />
          <h4>{product.title.length > 20 ? `${product.title.substring(0, 25)}...` : product.title}</h4>
          <div className='text-[10px] text-slate-600  '><span className='bg-green-700 py-[1px] px-[5px] text-white mx-1 rounded-lg '>{product.rating.rate}⭐️</span>{product.rating.count}</div>
          <div className='flex justify-between gap-2 my-2'>
            <button className='px-4 py-1 text-sm bg-purple-900 text-white rounded-md font-medium' onClick={() => handleAdd(product)}>Add to card</button>
            <Link to={`products/${product.id}`} className='px-4 py-1 text-sm bg-purple-900 text-white rounded-md font-medium'>Buy Now</Link>
          </div>
        </div>
      ))}
<div>
  {/* <div>{counter}</div>
  <button onClick={add}>add</button>
  <div></div>
  <button onClick={remove}>remove</button> */}
{/* {
    arr.map((arr)=>(
<div>{arr}</div>
    ))
  } */}
</div>

    </div>


  );
};

export default Productcard;
