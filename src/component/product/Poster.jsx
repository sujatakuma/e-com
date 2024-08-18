import React from 'react'
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
const Poster = () => {
    return (
        <div>
            <div class="flex justify-center items-center my-4 gap-2">
                <div class="rounded-md relative">
                    <img alt='' class="h-60 w-full" src='https://t4.ftcdn.net/jpg/06/53/58/05/360_F_653580585_kEWMHAFb2VEqAkM0BjVBkWdOltQSe9f4.jpg'></img>

                </div>
                <div class="relative  bg-gray-700">
                    <div className='absolute top-[50%] left-[25%] text-5xl text-pink-800 font-medium '>Cosmetics </div>
                    <img class="h-60  " src='https://t4.ftcdn.net/jpg/06/82/65/79/360_F_682657909_FvtTkzt0cHavPO1qbSZzRw89iRd30IKu.jpg' alt=''></img>

                </div>
            </div>
            <div className='flex justify-between gap-6'>
                <div className='border w-1/4 rounded items-center flex flex-col p-4 shadow-md shadow-gray-300'>
                    <MdProductionQuantityLimits className='text-purple-800 bg-purple-400 text-4xl p-1 rounded-full' />
                    <div className='text-[13px] flex justify-center items-center'>Quality Products & Best Price</div>

                </div>
                <div className='border w-1/4 rounded items-center flex flex-col p-4 shadow-md shadow-gray-300'>
                    <TbTruckReturn className='text-purple-800 bg-purple-400 text-4xl p-1 rounded-full' />
                    <div className='text-[13px] flex justify-center items-center'>Easy Returns & Customization</div>

                </div>
                <div className='border w-1/4 rounded items-center flex flex-col p-4 shadow-md shadow-gray-300'>
                    <CiDeliveryTruck className='text-purple-800 bg-purple-400 text-4xl p-1 rounded-full' />
                    <div className='text-[13px] flex justify-center items-center'>Free Delivery, Installation & Maintenance</div>

                </div>
                <div className='border w-1/4 rounded items-center flex flex-col p-4 shadow-md shadow-gray-300'>
                    <BiSupport className='text-purple-800 bg-purple-400 text-4xl p-1 rounded-full' />
                    <div className='text-[13px] flex justify-center items-center'>Our Impressive Customer Support</div>
                </div>
            </div>
            <div>
                <div>Trending Categories</div>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <div >
                        <div className='bg-yellow-600  flex  top-[20%] relative'> 50% off</div>
                        <img  className='w-60 h-56' src='https://m.media-amazon.com/images/I/61JfoOwS9IL._SL1000_.jpg' alt=''></img>
                    </div>
                    <div>
                        <img className='w-60 h-56'  src=' https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/tasmania_sofa/sofa_WSFATSNN3FVBL/sofa_WSFATSNN3FVBL_1.jpg' alt=''/>
                    </div>
                    <div>
                        <img  className='w-60 h-56'  src='https://m.media-amazon.com/images/I/71qB2ZUFMeL._AC_SY200_.jpg' alt=''/>
                    </div>
                    <div>
                        <img className='w-60 h-56'  src='https://m.media-amazon.com/images/I/61JuOwpEFyL._SL1200_.jpg' alt=''/>
                    </div>
                    <div>
                        <img className='w-60 h-56' src='https://m.media-amazon.com/images/I/71I-TKOuKPL._SL1099_.jpg' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Poster
