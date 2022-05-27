import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinLichChieuHeThongRap } from '../../../../redux/actions/QuanLyRapActions';
import './ListMovie.css'
import TabPaneMovie from '../../../../components/TabPaneMovie/TabPaneMovie';




export default function TabMovie() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(layThongTinLichChieuHeThongRap());
    }, [])

    const arrData = useSelector(state => state.QuanLyRapReducer.arrHeThongQuanLyRap);

    // console.log(arrData)

 

    return (
        <div className="mt-20 mb-40">
            <TabPaneMovie arrData={arrData} />
        </div>
    )
}
