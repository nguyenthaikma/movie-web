import moment from 'moment';
import React, { useEffect } from 'react'
import { message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { ThongTinTaiKhoan } from '../../redux/actions/QuanLyDatVeAction';
import { ACCOUNT } from '../../util/settings/config';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

export default function Contact() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const thongTinNguoiDung = JSON.parse(localStorage.getItem(ACCOUNT));

    const { thongTinDatVe } = useSelector(state => state.QuanLyDatVeReducer.ThongTinTaiKhoan);


    useEffect(() => {
        if (!localStorage.getItem(ACCOUNT)) {
            navigate('/login', { replace: true });
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vui lòng đăng nhập để tiếp tục!',
            })
        } else {
            dispatch(ThongTinTaiKhoan({ taiKhoan: thongTinNguoiDung?.taiKhoan }));
        }
    }, [])


    const renderFirm = () => {
        if (thongTinDatVe) {
            if (thongTinDatVe.length === 0) {
                return <div className="w-full mb-40">
                    <h1 className="text-gray-400 italic text-center">{t('chuadatve')}</h1>
                </div>
            }
            return thongTinDatVe?.map((phim, index) => {
                const thongTinRap = phim.danhSachGhe[0];
                return <div className="p-4 md:w-1/3" key={index}>
                    <div style={{ boxShadow: '0px 0px 2px 1px #ccc' }} className="flex rounded-lg h-full bg-white p-3 flex-col">
                        <div className="flex items-center mb-1">
                            <h2 className="text-green-600 text-xl title-font font-medium">{phim.tenPhim}</h2>
                        </div>
                        <div className="flex-grow">
                            <p className="leading-relaxed text-xs mb-1 font-semibold">
                                <span className="font-bold">Thời gian đặt:</span> {moment(phim.ngayDat).format('hh:mm A')}  {moment(phim.ngayDat).format('DD/MM/YYYY')}
                            </p>
                            <p className="leading-relaxed text-xs mb-1 font-semibold">
                                <span className="font-bold">Hệ thống rạp:</span> {thongTinRap.tenHeThongRap} - {thongTinRap.tenRap}
                            </p>
                            <p className="leading-relaxed text-xs mb-1 font-semibold">
                                <span className="font-bold">Thời lượng phim:</span> {phim.thoiLuongPhim} phút
                            </p>
                            <p className="leading-relaxed text-xs mb-1 font-semibold">
                                <span className="font-bold">Giá vé:</span> {phim.giaVe.toLocaleString()} đ
                            </p>
                            <p className="leading-relaxed text-xs mb-1 font-semibold">
                                <span className="font-bold">Ghế: </span><span>{phim.danhSachGhe.map((ghe, index) => {
                                    return <span key={index} className="font-bold mr-1 text-red-500">{ghe.tenGhe}</span>
                                })}</span>
                            </p>
                        </div>
                    </div>
                </div>
            })
        }
    }


    return (
        <div className="container mx-auto mt-40 mb-20">
            <h3 className="text-center text-3xl font-semibold mb-12">{t('history')}</h3>
            <div className="flex flex-wrap -m-4">
                {renderFirm()}
            </div>
        </div>
    )
}
