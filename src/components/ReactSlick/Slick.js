import React from "react";
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import './Slick.css'
import { getMovieDetail } from "../../redux/actions/ListMovieAction";
import { t } from "i18next";

export default function MultipleRows(props) {

    const dispatch = useDispatch();

    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 4,
        speed: 300,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
        ]
    };

    const renderPhim = () => {
        return props.data.map((item, index) => {
            return <div className="" key={index}>
                <div className="slick__wrap ">
                    <img src={item.hinhAnh} alt="1" className="slick__img " />
                    <div className="slick__overlay">
                        <a href={item.trailer} className="block slick-trailer">
                            <div className="m-auto" >
                                <img className="w-20" src={'https://cyrilmagic.com/wp-content/uploads/2020/05/PLAY-BUTTON-WHITE.png'} alt="1" />
                            </div>
                        </a>
                        <div className="slick__desc">
                            <h3 className="slick__tenPhim">{item.tenPhim}</h3>
                            <div className="flex justify-center">
                                <NavLink to={`/movieDetail/${item.maPhim}`} onClick={() => { dispatch(getMovieDetail(item.maPhim)) }} className="bg-red-600 hover:text-white font-medium mx-2 text-white px-3 py-1 rounded">{t('xemchitiet')}</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div style={{ marginTop: '40px' }}>
            <div className="slick__title">
                <img alt="1" className="opacity-0" src={'https://www.cgv.vn/skin/frontend/cgv/default/images/bg-cgv/h3_movie_selection.gif'} />
            </div>
            <Slider {...settings}>
                {renderPhim()}
            </Slider>
        </div>
    );
}


