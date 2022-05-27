import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckCircleOutlined } from '@ant-design/icons';
import { ThongTinTaiKhoan } from '../../redux/actions/QuanLyDatVeAction';
import { ACCOUNT } from '../../util/settings/config';
import moment from 'moment';

export default function Result() {

    const dispatch = useDispatch();

    const thongTinNguoiDung = JSON.parse(localStorage.getItem(ACCOUNT));

    useEffect(() => {
        dispatch(ThongTinTaiKhoan({ taiKhoan: thongTinNguoiDung.taiKhoan }))
    }, [])
    const thongTinTaiKhoan = useSelector(state => state.QuanLyDatVeReducer.ThongTinTaiKhoan);

    const renderItems = () => {
        return thongTinTaiKhoan?.thongTinDatVe?.map((item, index) => {
            const thongTinRap = item.danhSachGhe[0];
            return <div className="p-4 md:w-1/3" key={index}>
                <div style={{ boxShadow: '0px 0px 2px 1px #ccc' }} className="flex rounded-lg h-full bg-white p-3 flex-col">
                    <div className="flex items-center mb-1">
                        <h2 className="text-green-600 text-xl title-font font-medium">{item.tenPhim}</h2>
                    </div>
                    <div className="flex-grow">
                        <p className="leading-relaxed text-xs mb-1 font-semibold">
                            <span className="font-bold">Thời gian đặt:</span> {moment(item.ngayDat).format('hh:mm A')}  {moment(item.ngayDat).format('DD/MM/YYYY')}
                        </p>
                        <p className="leading-relaxed text-xs mb-1 font-semibold">
                            <span className="font-bold">Hệ thống rạp:</span> {thongTinRap.tenHeThongRap} - {thongTinRap.tenRap}
                        </p>
                        <p className="leading-relaxed text-xs mb-1 font-semibold">
                            <span className="font-bold">Thời lượng phim:</span> {item.thoiLuongPhim} phút
                        </p>
                        <p className="leading-relaxed text-xs mb-1 font-semibold">
                            <span className="font-bold">Giá vé:</span> {item.giaVe.toLocaleString()} đ
                        </p>
                        <p className="leading-relaxed text-xs mb-1 font-semibold">
                            <span className="font-bold">Ghế: </span><span>{item.danhSachGhe.map((ghe, index) => {
                                return <span key={index} className="font-bold mr-1 text-red-500">{ghe.tenGhe}</span>
                            })}</span>
                        </p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1 italic">Lịch sử khách hàng</h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-green-500 flex items-center justify-center"><CheckCircleOutlined className="mr-2" /> Đặt vé thành công!!! Chúc bạn xem phim vui vẻ</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {renderItems()}
                    </div>
                </div>
            </section>
        </div>

    )
}
