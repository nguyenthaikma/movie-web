import { Carousel } from 'antd'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';
import './HomeCarousel.css'



export default function HomeCarousel() {

    // function onChange(a, b, c) {
    //     console.log(a, b, c);
    // }
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getCarouselAction());
      
    }, [])

    const arrCarousel = useSelector(state => state.CarouselReducer.arrCarousel);
    return (
        <Carousel autoplay>
            {arrCarousel.map((item, index) => {
                return <div key={index}>
                    <div style={{
                        backgroundImage: `url(${item.hinhAnh})`
                    }} className="home__carousel">
                        <img alt={item.hinhAnh} src={item.hinhAnh} className="w-full h-full opacity-0" />
                    </div>
                </div>
            })}
        </Carousel>
    )
}
