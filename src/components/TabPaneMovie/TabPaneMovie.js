import React from 'react'
import { Radio, Space, Tabs } from 'antd'
import {NavLink} from 'react-router-dom'



import moment from 'moment';


const { TabPane } = Tabs;


export default function TabPaneMovie(props) {

    const renderTab = () => {
        return props.arrData?.map((heThongRap, index) => {
            return <TabPane key={index} tab={
                <img className="w-10 h-10 rounded-full" src={heThongRap.logo} alt="1" />
            }>
                <Tabs tabPosition="left">
                    {heThongRap.lstCumRap.map((cumRap, index) => {
                        return <TabPane key={index} tab={
                            <div className="flex">
                                <div>
                                    <img src={heThongRap.logo} alt="1" className="w-6 h-6" />
                                </div>
                                <div className="ml-2">
                                    <div className="flex font-semibold text-xs text-left mb-1">
                                        <p className="tab__label m-0">Tên rạp:</p>
                                        <span className="ml-1 font-normal">{cumRap.tenCumRap}</span>
                                    </div>
                                    <div className="font-semibold flex text-xs text-left">
                                        <p className="tab__label ">Địa chỉ:</p>
                                        <p className="tab__diaChi">{cumRap.diaChi}</p>
                                    </div>
                                </div>
                            </div>
                        }>
                            {cumRap.danhSachPhim.map((item, index) => {
                                return <div key={index} className="flex">
                                    <div style={{
                                        backgroundImage: `url(${item.hinhAnh})`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                        className=" h-14 w-14 "
                                    >
                                        <img alt='1' src={item.hinhAnh} className="h-14 w-14 opacity-0" />
                                    </div>
                                    <div className="ml-2 mb-5">
                                        <h2 className="text-teal-800 text-xl leading-none font-medium">{item.tenPhim}</h2>
                                        <div className="grid grid-cols-6 gap-3">
                                            {item.lstLichChieuTheoPhim.slice(0, 12).map((item, index) => {
                                                return <NavLink to={`/checkout/${item.maLichChieu}/*`} key={index} className="text-teal-400 hover:text-teal-500 font-medium">
                                                    {moment(item.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        })
    }

    return (
        <Tabs tabPosition="left">
            {renderTab()}
        </Tabs>
    )
}
