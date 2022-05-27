import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { LayDanhSachPhongVe, LayThongTinTaiKhoan } from "../types/QuanLyDatVeType";

export const LayDanhDachPhongVe = (maLichChieu) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'DISPLAY_LOADING'
            })
            const { status, data } = await quanLyDatVeService.layDanhSachVe(maLichChieu);
            if (status === 200) {
                dispatch({
                    type: LayDanhSachPhongVe,
                    data: data
                })
            }
            dispatch({
                type: 'HIDE_LOADING'
            })
        } catch (err) {
            console.log(err.response);
        }
    }
}

export const DatVe = (obj, navigate, id) => {
    return async (dispatch) => {
        try {
            const { status, data } = await quanLyDatVeService.datVe(obj);
            if (status === 200) {
                navigate(`/checkout/${id}/result`);
                dispatch({
                    type: 'DISPLAY_LOADING'
                })
                setTimeout(() => {
                    dispatch({ type: 'HIDE_LOADING' })
                }, 400)
            }
        } catch (err) {
            console.log(err.response);
        }
    }
}

export const ThongTinTaiKhoan = (taiKhoan) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: 'DISPLAY_LOADING'
            })
            const { status, data } = await quanLyDatVeService.thongTinTaiKhoan(taiKhoan);
            if (status === 200) {
                dispatch({
                    type: LayThongTinTaiKhoan,
                    data: data
                })
            }
            dispatch({
                type: 'HIDE_LOADING'
            })
        } catch (err) {
            console.log(err.response);
        }
    }
}