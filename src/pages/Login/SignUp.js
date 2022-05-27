import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import './signup.css'
import { dangKy } from '../../redux/actions/QuanLyNguoiDungAction';

export default function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            confirm: '',
            email: '',
            soDt: '',
            hoTen: ''
        },
        onSubmit: values => {
            if (values.matKhau !== values.confirm) {
                alert('Confirm password is incorrect');
                return;
            }
            const { taiKhoan, matKhau, email, soDt, hoTen } = values;
            const objDispatch = {
                taiKhoan,
                matKhau,
                email,
                soDt,
                hoTen,
                maNhom: 'GP04',
                maLoaiNguoiDung: 'Thuong'
            }
            dispatch(dangKy(objDispatch, navigate));
        },
    });
    return (
        <div>
            <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div onClick={() => {
                    navigate('/')
                }} className="cursor-pointer flex items-center">
                    <div>
                        <svg className="w-10 text-indigo-500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 225 225" style={{ enableBackground: 'new 0 0 225 225' }} xmlSpace="preserve">
                            <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                            " }} />
                            <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                                <g>
                                    <path id="Layer0_0_1_STROKES" className="st0" d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">MOVIE WEB</div>
                </div>
            </div>
            <div className="mt-3 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-0 xl:px-24 xl:max-w-2xl">
                <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
              xl:text-bold">Sign up</h2>
                <div className="mt-12">
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <div>
                            <div className="text-sm font-bold text-gray-700 tracking-wide">User name</div>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.taiKhoan}
                                name="taiKhoan"
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                placeholder="User name"
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                            </div>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.matKhau}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="password"
                                placeholder="Password"
                                name="matKhau"
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Confirm password
                                </div>
                            </div>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.confirm}
                                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="password"
                                placeholder="Confirm password"
                                name="confirm"
                            />
                        </div>
                        <div className="flex">
                            <div className="mt-8 w-1/2 mr-1">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Email
                                    </div>
                                </div>
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                />
                            </div>

                            <div className="mt-8 w-1/2 ml-1">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Phone number
                                    </div>
                                </div>
                                <input
                                    onChange={formik.handleChange}
                                    value={formik.values.soDt}
                                    className="signup__phone w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                    type="text"
                                    pattern="[0-9]{10}"
                                    placeholder="Phone number"
                                    name="soDt"
                                />
                            </div>

                        </div>

                        <div className="mt-8">
                            <div className="flex justify-between items-center">
                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                    Name
                                </div>
                            </div>
                            <input
                                onChange={formik.handleChange}
                                value={formik.values.hoTen}
                                className="signup__phone w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="text"
                                placeholder="Name"
                                name="hoTen"
                            />
                        </div>

                        <div className="mt-10">
                            <button className="bg-indigo-500 text-gray-100 px-10 py-3 rounded-md tracking-wide
                                        font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                        shadow-lg mb-10"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
