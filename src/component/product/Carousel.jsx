import React, { useState, useEffect } from 'react'
// import "./Carousel.css"
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Poster from './Poster';

const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newIndex = (currentIndex + 1) % slides.length;
            setCurrentIndex(newIndex);
        }, 2000); // Change slides every 2 seconds

        return () => clearInterval(intervalId);
    }, [currentIndex, slides.length]);

    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative">
            <div className='flex '>
                <div className="carousel w-full relative">
                    <button
                        className="absolute top-[50%] left-0 bg-gray-700 py-4 px-2 border-none cursor-pointer text-4 transform -translate-y-1/2"
                        onClick={prevSlide}
                    >
                        <FcPrevious />
                    </button>
                    <div className="slide">
                        <img src={slides[currentIndex].imageUrl} alt="slide" className="w-full h-[500px]" />
                        {/* <div className="text">{slides[currentIndex].text}</div> */}
                    </div>
                    <button
                        className="absolute top-[50%] right-0 bg-gray-700 py-4 px-2 border-none cursor-pointer text-4 transform -translate-y-1/2"
                        onClick={nextSlide}
                    >
                        <FcNext />
                    </button>
                </div>
            </div>
            <Poster></Poster>
        </div>
    )
}

export default Carousel
