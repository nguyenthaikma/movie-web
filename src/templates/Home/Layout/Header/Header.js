import { Button, Popover, Select } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'
import { ACCOUNT, TOKEN } from '../../../../util/settings/config';
import './Header.css'

const { Option } = Select;


export default function Header() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const thongTinNguoiDung = JSON.parse(localStorage.getItem(ACCOUNT));

    const handleLanguage = (values) => {
        i18n.changeLanguage(values);
        window.location.reload();
    }

    const content = (
        <div>
            <NavLink to="/info">{t('personal')}</NavLink>
            <div>
                <Button className="mt-2" danger type="primary" onClick={() => {
                    localStorage.removeItem(ACCOUNT);
                    localStorage.removeItem(TOKEN);
                    dispatch({
                        type: 'DISPLAY_LOADING'
                    })
                    setTimeout(() => {
                        dispatch({ type: 'HIDE_LOADING' })
                    }, 400)
                    navigate('/login');
                }}>{t('dangxuat')}</Button>
            </div>
        </div>
    )
    return (
        <header className="header">
            <div className="container flex justify-between h-16 mx-auto text-white">
                <NavLink to="/" className="flex items-center p-2">
                    <img className="w-28 h-full" src="https://movieweb.com/public/build/images/mw-logo-full-colored-light.7e4081ad.svg" alt="logo" />
                </NavLink>
                <ul className="items-stretch hidden space-x-3 lg:flex">
                    <li className="flex">
                        <NavLink to="/info" className={({ isActive }) => "header__navLink" + (isActive ? ' active' : '')}>{t('personal')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/" className={({ isActive }) => "header__navLink" + (isActive ? ' active' : '')}>{t('home')}</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/history" className={({ isActive }) => "header__navLink" + (isActive ? ' active' : '')}>{t('history')}</NavLink>
                    </li>
                </ul>
                <div className="items-center flex-shrink-0 hidden lg:flex">
                    {/* <NavLink to="/login" className="self-center text-white hover:text-white px-8 py-3 rounded">Sign in</NavLink> */}
                    <Select defaultValue={localStorage.getItem('i18nextLng')} onChange={handleLanguage} style={{ width: 105, marginRight: '12px' }}>
                        <Option value="vi">Tiếng Việt</Option>
                        <Option value="en">English</Option>
                        <Option value="chi">中国</Option>
                    </Select>
                    {thongTinNguoiDung ?
                        <Popover placement="bottom" content={content} title={thongTinNguoiDung?.hoTen}>
                            <div className="flex items-center cursor-pointer bg-white px-2 py-1 rounded-md">
                                <img className="w-6 h-6 rounded-full" alt="user" src="https://toigingiuvedep.vn/wp-content/uploads/2021/02/hinh-anh-anime-chibi-cute-de-thuong-nhat-8.jpg" />
                                <span className="font-semibold text-sm ml-2 text-neutral-700">{thongTinNguoiDung?.hoTen}</span>
                            </div>
                        </Popover>
                        :
                        <NavLink to="/login" className="header__btn">{t('signin')}</NavLink>
                    }

                </div>
                <button className="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-coolGray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}
