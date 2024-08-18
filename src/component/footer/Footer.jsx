import React from 'react'

const Footer = () => {
    return (
        <div className='bg-blue-950 p-4 text-white '>
            <div className='flex justify-between'>
                <div>
                    Get to Know us
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>About</li>
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>Careers</li>
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>Press Releases</li>

                </div>
                <div>
                    Connect with us
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>Facebook</li>
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>Twitter</li>
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>Instagram</li>
                </div>
                <div>
                    Let Us Help You


                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>COVID-19 and Amazon</li>
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>Your Account</li>
                    <li className='list-none text-[12px] text-gray-300 hover:underline underline-offset-4 cursor-pointer'>Returns Centre</li>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Footer
