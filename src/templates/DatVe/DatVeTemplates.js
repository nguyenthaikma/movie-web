import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { WarningOutlined } from '@ant-design/icons';
import { DatVe } from '../../redux/actions/QuanLyDatVeAction';
import { ACCOUNT, TOKEN } from '../../util/settings/config';
import { t } from 'i18next';
import { message } from 'antd';

export default function DatVeTemplates(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(localStorage.getItem(TOKEN));
        if (!localStorage.getItem(TOKEN)) {
            navigate('/login', {replace: true});
            message.warn('Vui lòng đăng nhập để tiếp tục!');
        }
    }, [])


    const thongTinNguoiDung = JSON.parse(localStorage.getItem(ACCOUNT));


    const { id } = useParams();

    // useEffect(() => {
    //     dispatch(LayDanhDachPhongVe(id));
    // }, [])

    const { thongTinPhim } = useSelector(state => state.QuanLyDatVeReducer.danhSachPhongVe);
    const danhSachVe = useSelector(state => state.QuanLyDatVeReducer.danhSachVe);
    const isDisabledDatVe = useSelector(state => state.QuanLyDatVeReducer.isDisabledDatVe);
    const classDisabledDatVe = isDisabledDatVe ? 'disabled' : '';

    const tongTien = danhSachVe?.reduce((tongTien, ve) => {
        tongTien += ve.giaVe;
        return tongTien
    }, 0)

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-9">
                <div
                    style={{ zIndex: 1 }}
                    className="checkout__header px-10 shadow-xl relative"
                >
                    <div className="flex justify-between">
                        <div className="flex">
                            <NavLink to={`/checkout/${id}/*`} className={({isActive}) => 'text-black hover:text-black px-2 pt-6 pb-4 font-semibold text-sm cursor-pointer' + (isActive ? ' checkout--active' : '')}>
                                <span className="font-bold text-md">01</span>
                                <span className="ml-1 text-xs">{t('choose')}</span>
                            </NavLink>
                            <NavLink to={`/checkout/${id}/result`} className={({isActive}) => "px-2 pt-6 pb-4 font-semibold text-sm cursor-pointer text-black hover:text-black" + (isActive ? " checkout--active" : '')}>
                                <span className="font-bold text-md">02</span>
                                <span className="ml-1 text-xs">{t('results')}</span>
                            </NavLink>
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <img className="w-6 h-6" alt="user" src="https://toigingiuvedep.vn/wp-content/uploads/2021/02/hinh-anh-anime-chibi-cute-de-thuong-nhat-8.jpg" />
                            <span className="font-semibold text-sm ml-2 text-neutral-700">{thongTinNguoiDung?.hoTen}</span>
                        </div>
                    </div>
                </div>
                <props.data />
            </div>
            <div className=" checkout-booking" style={{ boxShadow: '-3px 3px 6px -1px rgb(0 0 0 / 0.1), -3px 3px 4px -2px rgb(0 0 0 / 0.1)' }}>

                <div className="flex flex-col justify-between px-4 h-full">
                    <div className="checkout-inf__movie">
                        <h3 className="py-4 text-green-500 text-center text-3xl">
                            {tongTien.toLocaleString()} đ
                        </h3>
                        <div className="flex flex-col checkout-inf__item">
                            <div>
                                <span className="bg-red-600 text-white rounded-md px-1 py-0 text-xs font-semibold">C18</span>
                                <span className="ml-1 font-bold text-sm">{thongTinPhim?.tenPhim}</span>
                            </div>
                            <div>
                                {thongTinPhim?.tenCumRap}
                            </div>
                            <div>
                                {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} - {thongTinPhim?.tenRap}
                            </div>
                        </div>
                        <div className="checkout-inf__item flex justify-between">
                            <span className="text-red-500 flex">
                                Ghế
                                <span className="ml-2 flex flex-wrap">
                                    {danhSachVe?.map((item, index) => {
                                        return <span key={index} className="text-teal-500 mx-1">
                                            {item.tenGhe}
                                        </span>

                                    })}
                                </span>
                            </span>
                        </div>
                        <div className="checkout-inf__item">
                            <span className="checkout-inf__label">E-Mail</span>
                            <p>
                                {thongTinNguoiDung?.email}
                            </p>
                        </div>
                        <div className="checkout-inf__item">
                            <span className="checkout-inf__label">Phone</span>
                            <p>
                                {thongTinNguoiDung?.soDT || 'Null'}
                            </p>
                        </div>
                        <div className="checkout-inf__item flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="checkout-inf__label">Mã giảm giá</span>
                                <input className="checkout-inf__input" placeholder=" Nhập tại đây" />
                            </div>
                            <button className="bg-gray-400 text-white py-1 rounded-md px-2 h-1/2">
                                {t('apply')}
                            </button>
                        </div>
                        <div className="checkout-inf__item">
                            <h4 className="font-semibold text-md">
                                Hình thức thanh toán
                            </h4>
                            <p className="font-11 text-red-500">
                                Vui lòng chọn ghế để hiển thị phương thức thanh toán phù hợp.
                            </p>
                        </div>
                    </div>
                    <div className="font-11 flex-1 text-center flex flex-col justify-end">
                        <p className="mb-1 text-red-500 flex items-center justify-center">
                            <WarningOutlined />
                            <span className="text-black font-semibold">Vé đã mua không thể đổi hoặc hoàn tiền </span>
                        </p>
                        <p className="mb-1 text-black font-semibold">
                            Mã vé sẽ được gửi qua tin nhắn <a className="text-yellow-600 hover:text-yellow-600">ZMS</a>(tin nhắn Zalo) và <a className="text-yellow-600 hover:text-yellow-600">Email</a> đã nhập.
                        </p>
                        <button disabled={isDisabledDatVe}
                            onClick={() => {
                                const danhSachVeDat = danhSachVe.map((ve, index) => {
                                    return {
                                        maGhe: ve.maGhe,
                                        giaVe: ve.giaVe
                                    }
                                })
                                const objDispatch = {
                                    maLichChieu: Number(id),
                                    danhSachVe: danhSachVeDat,
                                    taiKhoanNguoiDung: thongTinNguoiDung?.taiKhoan
                                }
                                dispatch(DatVe(objDispatch, navigate, id));
                            }}
                            className={`checkout-booking__btn ${classDisabledDatVe} mb-1 rounded-sm`
                            }>
                            {t('book')}
                        </button>
                    </div>
                </div>

            </div>
        </div >
    )
}
