import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './Redux/Cardslicce'

const Addtocard = () => {
    const [counters, setCounters] = useState({});
    const items = useSelector((state) => state.card);
    // const {items, totalQuandity,
    //     totalPrice} = useSelector((state) => state.card);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(remove(id));
        // Remove the counter for the removed item
        setCounters((prevCounters) => {
            const updatedCounters = { ...prevCounters };
            delete updatedCounters[id];
            return updatedCounters;
        });
    }

    const decrementCounter = (id) => {
        setCounters((prevCounters) => ({
            ...prevCounters,
            [id]: Math.max((prevCounters[id] || 1) - 1, 1) // Ensure the counter does not go below 1
        }));
    }

    const incrementCounter = (id) => {
        setCounters((prevCounters) => ({
            ...prevCounters,
            [id]: (prevCounters[id] || 1) + 1
        }));
    }

    return (
        <>

            <div className='flex font-poppins'>
                <div className='w-9/12  max-h-[calc(100vh-32px)]  overflow-y-auto mt-14'>

                    {items.map((item) => (
                        <div key={item.id} className='flex justify-between p-4 items-center border-b w-[90%]'>
                            <div className='flex items-center'>
                                <div>
                                    <img className='h-28 w-28' src={item.image} alt='' />
                                </div>
                                <div className='pl-8'>
                                    <div className='text-sm font-normal'>{item.title}</div>
                                    <div className='text-[15px] font-medium'>Rs. {item.price * (counters[item.id] || 1)}</div>
                                    {/* <div className='text-[13px] text-slate-600'>{item.rating.rate}⭐️{item.rating.count}</div> */}

                                    <div className='flex mt-2 gap-3'>
                                        <button onClick={() => decrementCounter(item.id)} className='border rounded-full py-[1px] px-[10px] border-gray-600'>-</button>
                                        <div className='border rounded-sm py-[1px] px-[10px] border-gray-600 '>{counters[item.id] || 1}</div>
                                        <button onClick={() => incrementCounter(item.id)} className='border rounded-full py-[1px] px-[8px] border-gray-600'>+</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button className='px-4 py-1 text-sm bg-purple-900 text-white rounded-md font-medium' onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='w-1/4 h-1/4 border rounded-md shadow-md m-2'>
                    <div className='border-b text-md text-gray-500 flex justify-center p-4'>Price Details</div>
                    <div className='flex justify-between px-2 py-2'>
                        <div className='text text-sm font-[300] '>Total Items</div>
                        <div className='text text-sm font-[300]'>
                            {
                                items.map(item => (counters[item.id] || 1)).reduce((total, value) => total + value, 0)
                            }
                        </div>
                    </div>

                    <div className='flex justify-between px-2 '>
                        <div className='text text-sm font-[300] '>Delivery Charges</div>
                        <div className='text text-sm '>
                            {
                                (() => {
                                    const totalAmount = items.map(item => item.price * (counters[item.id] || 1)).reduce((total, value) => total + value, 0);
                                    let deliveryCharge;
                                    if (totalAmount > 500) {
                                        deliveryCharge = 0;
                                    } else {
                                        deliveryCharge = 100;
                                    }
                                    return (
                                        <span className={deliveryCharge === 0 ? 'text-green-500' : 'text-red-500'}>
                                            {deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge}`}

                                        </span>
                                    )
                                })()
                            }
                        </div>
                    </div>
                    <div className='flex justify-between px-2 py-2'>
                        <div className='text text-sm font-[300] '>Discount</div>
                        <div className='text text-sm'>
                            {
                                (() => {
                                    const totalAmount = items.map(item => item.price * (counters[item.id] || 1)).reduce((total, value) => total + value, 0);
                                    let discountCharge;
                                    if (totalAmount > 1000) {
                                        discountCharge = 0.20 * totalAmount;  // 20% discount
                                    } else {
                                        discountCharge = 0;
                                    }
                                    return (
                                        <span className={discountCharge > 0 ? 'text-green-500' : 'text-red-500'}>
                                            {discountCharge > 0 ? "20%" : 'No Discount'}
                                        </span>
                                    )
                                })()
                            }
                        </div>
                    </div>
                    <div className='flex justify-between px-2 py-1'>
                        <div className='text text-sm font-[300] '>Product Amount</div>
                        <div className='text text-sm font-[300]'>₹
                            {

                                items.map(item => item.price * (counters[item.id] || 1)).reduce((total, value) => total + value, 0)

                            }
                        </div>

                    </div>
                    <div className='flex justify-between p-2 border-t'>
                        <div className='text text-md font-medium'>Total Amount</div>
                        <div className='text text-md font-medium'>₹
                            {
                                (() => {
                                    const totalAmount = items.map(item => item.price * (counters[item.id] || 1)).reduce((total, value) => total + value, 0);
                                    let deliveryCharge;
                                    if (totalAmount > 500) {
                                        deliveryCharge = 0;
                                    } else {
                                        deliveryCharge = 100;
                                    }
                                    let discountCharge;
                                    if (totalAmount > 1000) {
                                        discountCharge = 0.20 * totalAmount;  // 20% discount
                                    } else {
                                        discountCharge = 0;
                                    }
                                    const total = totalAmount - discountCharge + deliveryCharge;
                                    return total.toFixed(2);
                                })()
                            }
                        </div>
                    </div>
                    <div className='p-2 text-[13px] text-slate-500'>Safe and Secure Payments.Easy returns.100% Authentic products.</div>

                </div>

            </div>
        </>
    )
}

export default Addtocard;
