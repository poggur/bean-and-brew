import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import React, { useState } from 'react';

export default function Carousel(props) {
    const arrowcss = "absolute cursor-pointer z-10 top-1/2 text-white duration-300 hover:text-[#475569]"
    const NextArrow = ({onClick}) => {
        return (
            <div className={`${arrowcss} right-0`} onClick = {onClick}>
                <FaArrowRight/>
            </div>
        );
    }

    const PreviousArrow = ({onClick}) => {
        return (
            <div className={`${arrowcss} left-0`} onClick = {onClick}>
                <FaArrowLeft/>
            </div>
        );
    }

    const [index, setIndex] = useState(0);
    
    return (
        <Slider infinite lazyLoad centerMode speed={300} slidesToShow={3} centerPadding={0} nextArrow={<NextArrow/>} prevArrow={<PreviousArrow/>} beforeChange={(_,next)=>setIndex(next)}>
            {props.children}
        </Slider>
    );
}