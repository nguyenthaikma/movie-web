import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { DatVe, LayDanhDachPhongVe } from '../../redux/actions/QuanLyDatVeAction';
import { WarningOutlined } from '@ant-design/icons';
import { ACCOUNT } from '../../util/settings/config';
import './Checkout.css'
import { chonVe } from '../../redux/types/QuanLyDatVeType';

export default function Checkout() {

    const thongTinNguoiDung = JSON.parse(localStorage.getItem(ACCOUNT));

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(LayDanhDachPhongVe(id));
    }, [])

    const { thongTinPhim, danhSachGhe } = useSelector(state => state.QuanLyDatVeReducer.danhSachPhongVe);
    const danhSachVe = useSelector(state => state.QuanLyDatVeReducer.danhSachVe);
    let giaVeThuong = ''
    let giaVeVip = '';
    for (let i = 0; i < danhSachGhe?.length; i++) {
        if (danhSachGhe[i].loaiGhe === 'Thuong') {
            giaVeThuong = danhSachGhe[i].giaVe;
        }
        if (danhSachGhe[i].loaiGhe === 'Vip') {
            giaVeVip = danhSachGhe[i].giaVe;
        }
    }
    // console.log(danhSachVe);



    const renderSeats = () => {
        return danhSachGhe?.map((ghe, index) => {
            const classGheDaDat = ghe.daDat ? 'gheDaDat' : '';
            const classGheBanDat = ghe.taiKhoanNguoiDat === thongTinNguoiDung?.taiKhoan ? 'gheBanDat' : '';
            const classGheVip = ghe.loaiGhe === 'Thuong' ? '' : 'gheVip';
            let classGheDangChon = '';
            const i = danhSachVe.findIndex(item => item.maGhe === ghe.maGhe);
            if (i !== -1) {
                classGheDangChon = 'gheDangChon';
            }
            return <React.Fragment key={index}>
                <button
                    onClick={() => {
                        dispatch({
                            type: chonVe,
                            ve: ghe
                        })
                    }}
                    disabled={ghe.daDat}
                    className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangChon} ${classGheBanDat}`}
                >
                    {ghe.stt}
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </React.Fragment>
        })
    }

    return (
        <div
            style={{
                backgroundImage: `url(${thongTinPhim?.hinhAnh})`
            }}
            className="checkout__background"
        >
            <div className="checkout__content px-10 py-5">
                <div className="flex justify-between">
                    <div>
                        <div className="font-semibold text-lg italic text-green-500">
                            <span>{thongTinPhim?.tenCumRap}</span>
                        </div>
                        <div className="text-slate-500 italic">
                            - <span>{thongTinPhim?.gioChieu}</span> - <span>{thongTinPhim?.tenRap}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex justify-around">
                    <div className="flex items-center">
                        <div className="bg-yellow-500 rounded-full w-6 h-6"></div>
                        <span className="text-yellow-500 font-bold text-sm ml-1 italic flex flex-col justify-center">
                            Ghế VIP
                            <p className="text-xs font-medium text-gray-500 m-0">{giaVeVip.toLocaleString()} đ</p>
                        </span>
                    </div>
                    <div className="flex items-center ml-5">
                        <div className="bg-gray-500 rounded-full w-6 h-6"></div>
                        <span className="text-gray-500 font-bold text-sm ml-1 italic flex flex-col justify-center">
                            Ghế thường
                            <p className="text-xs font-medium text-gray-500 m-0">{giaVeThuong.toLocaleString()} đ</p>
                        </span>
                    </div>
                    <div className="flex items-center ml-5">
                        <div className="bg-red-500 rounded-full w-6 h-6"></div>
                        <span className="text-red-500 font-bold text-sm ml-1 italic flex flex-col justify-center">
                            Ghế đã đặt
                        </span>
                    </div>
                    <div className="flex items-center ml-5">
                        <div className="bg-green-500 rounded-full w-6 h-6"></div>
                        <span className="text-green-500 font-bold text-sm ml-1 italic flex flex-col justify-center">
                            Ghế đang chọn
                        </span>
                    </div>
                    <div className="flex items-center ml-5">
                        <div style={{ boxShadow: '0px 0px 2px 1px #22c55e' }} className="bg-white rounded-full w-6 h-6"></div>
                        <span className="text-green-500 font-bold text-sm ml-1 italic flex flex-col justify-center">
                            Ghế bạn đặt
                        </span>
                    </div>
                </div>
                <div>
                    <img alt="manHinh" src={require('../../assets/Img/ic-screen.png')} className="mt-4" />
                    <div className="mt-2 text-center">
                        {renderSeats()}
                    </div>
                </div>
            </div>
        </div>
    )
}
