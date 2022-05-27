import React from 'react';
import { useSelector } from 'react-redux'
import './DetailMovie.css'
import { Tabs } from 'antd'
import { NavLink } from 'react-router-dom'
import moment from 'moment';
import { t } from 'i18next';


const { TabPane } = Tabs;

export default function DetailMovie() {
    const detailMovie = useSelector(state => state.ListMovieReducer.movieDetail);
    // console.log(detailMovie)

    const renderTab = () => {
        return detailMovie.heThongRapChieu?.map((heThongRapChieu, index) => {
            return <TabPane key={index} tab={<img src={heThongRapChieu.logo} alt={index} className="w-5 h-5 rounded-full" />}>
                <Tabs tabPosition="left">
                    {heThongRapChieu.cumRapChieu.map((item, index) => {
                        return <TabPane key={index} tab={
                            <div>
                                <div className="font-semibold text-xs">
                                    <p style={{ maxWidth: 100 }} className="font-normal whitespace-normal text-ellipsis">{item.tenCumRap}</p>
                                </div>
                            </div>
                        }>
                            <div key={index} className="grid grid-cols-3 gap-3">
                                {item.lichChieuPhim.slice(0, 12).map((item, index) => {
                                    return <NavLink to={'/checkout/' + item.maLichChieu + '/*'} key={index} className="text-green-500 hover:text-green-600 font-medium">
                                        {moment(item.ngayChieuGioChieu).format('hh:mm A')}
                                    </NavLink>
                                })}
                            </div>
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }

    return (
        <>
            <div className="container mx-auto mb-40">
                <h2 className="pt-7 pb-3 text-3xl border-b-2 border-black">{t('descmovie')}</h2>
                <section className="text-gray-600 body-font overflow-hidden mt-10">
                    <div className="container px-5 pt -12 mx-auto">
                        <div className="lg:w-4/5 mx-auto grid grid-cols-3">
                            <img alt="ecommerce" className=" object-cover object-center rounded col-span-1" src={detailMovie.hinhAnh} />
                            <div className=" w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 col-span-2">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">MOVIEWEB</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detailMovie.tenPhim}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span className="text-gray-600 ml-3">{detailMovie.danhGia} Reviews</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                        <span className="text-gray-500 cursor-pointer">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-500 cursor-pointer">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-500 cursor-pointer">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">{detailMovie.moTa}</p>
                                <div className="mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    Ngày khởi chiếu: <span className="font-bold">{detailMovie.ngayKhoiChieu}</span>
                                </div>
                                <Tabs tabPosition="left">
                                    {renderTab()}
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
