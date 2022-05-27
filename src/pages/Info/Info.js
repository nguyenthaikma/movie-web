import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import './Info.css'
import { Button, Input, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'
import { ACCOUNT } from '../../util/settings/config';
import { capNhat, layThongTin } from '../../redux/actions/QuanLyNguoiDungAction';


export default function News() {
    const Swal = require('sweetalert2')

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const thongTinNguoiDung = JSON.parse(localStorage.getItem(ACCOUNT));
    const thongTinTaiKhoan = useSelector(state => state.QuanLyNguoiDungReducer.thongTin);
    const status = useSelector(state => state.QuanLyNguoiDungReducer.status);

    // console.log(status)


    const onFinish = (values) => {
        const objDispatch = {
            ...values,
            maNhom: "GP04",
            maLoaiNguoiDung: "KhachHang",
            taiKhoan: thongTinNguoiDung?.taiKhoan,
            matKhau: thongTinTaiKhoan?.matKhau
        }
        dispatch(capNhat(objDispatch))
    }

    useEffect(() => {
        if (!localStorage.getItem(ACCOUNT)) {
            navigate('/login', { replace: true });
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vui lòng đăng nhập để tiếp tục!',
            })
        }
        dispatch(layThongTin({
            taiKhoan: thongTinNguoiDung?.taiKhoan
        }));
    })

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <h3 className="info__info">Thông tin cá nhân</h3>
                        <div className="flex flex-col sm:flex-row mt-14">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="flex justify-center items-center">
                                    <img alt="avatar" src="https://toigingiuvedep.vn/wp-content/uploads/2021/02/hinh-anh-anime-chibi-cute-de-thuong-nhat-8.jpg" className="info__avatar" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{thongTinNguoiDung?.hoTen}</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                    <NavLink to="/history" className="mt-3 flex justify-center items-center">Lịch sử đặt vé<ArrowRightOutlined className="ml-1" /></NavLink>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <Form
                                    initialValues={{
                                        hoTen: thongTinNguoiDung?.hoTen,
                                        email: thongTinNguoiDung?.email,
                                        soDt: thongTinNguoiDung?.soDT
                                    }}
                                    onFinish={onFinish}
                                    name="change"
                                >
                                    <div className="my-4">
                                        <span className="font-semibold">Họ tên: </span>
                                        {
                                            status ?
                                                <Form.Item
                                                    name="hoTen"
                                                    rules={[
                                                        {
                                                            min: 6,
                                                            message: 'Họ tên phải có 6 ký tự trở lên!!'
                                                        },
                                                        {
                                                            required: true,
                                                            message: 'Vui lòng nhập trường này!!'
                                                        }
                                                    ]}
                                                >
                                                    <Input placeholder="Họ tên" />
                                                </Form.Item>
                                                :
                                                <span className="italic">{thongTinNguoiDung?.hoTen}</span>
                                        }
                                    </div>
                                    <div className="my-4">
                                        <span className="font-semibold">Email: </span>
                                        {
                                            status ?
                                                <Form.Item
                                                    name="email"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Vui lòng nhập trường này!!'
                                                        },
                                                        {
                                                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                            message: 'Email không hợp lệ!!'
                                                        }
                                                    ]}
                                                >
                                                    <Input placeholder="Email" />
                                                </Form.Item>
                                                :
                                                <span className="italic">{thongTinNguoiDung?.email}</span>
                                        }
                                    </div>
                                    <div className="my-4">
                                        <span className="font-semibold">Loại người dùng: </span>
                                        <span className="italic">{thongTinNguoiDung?.loaiNguoiDung}</span>
                                    </div>
                                    <div className="my-4">
                                        <span className="font-semibold">Số điện thoại: </span>
                                        {
                                            status ?
                                                <Form.Item
                                                    name="soDt"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Vui lòng nhập trường này!!'
                                                        },
                                                        {
                                                            pattern: /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                                                            message: 'Số điện thoại không hợp lệ!!'
                                                        }
                                                    ]}
                                                >
                                                    <Input placeholder="Số điện thoại" />
                                                </Form.Item>
                                                :
                                                <span className="italic">{thongTinNguoiDung?.soDT}</span>
                                        }
                                    </div>
                                    {status ?
                                        <Button htmlType="submit" type="primary">Cập nhật</Button>
                                        :
                                        <span onClick={() => {
                                            dispatch({
                                                type: 'CHANGE'
                                            })
                                        }} style={{ color: '#1890ff' }} className="underline cursor-pointer">Chỉnh sửa</span>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
