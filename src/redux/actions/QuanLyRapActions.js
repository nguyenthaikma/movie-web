import { quanLyRapService } from "../../services/QuanLyRapServices";
import { GET_HE_THONG_QUAN_LY_RAP, GET_THONG_TIN_HE_THONG_RAP } from "../types/QuanLyRapTypes";

export const layThongTinLichChieuHeThongRap = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.LayThongTinLichChieuHeThongRap();
            dispatch({
                type: GET_HE_THONG_QUAN_LY_RAP,
                data: result.data
            })
        } catch(err) {
            console.log(err);
        }
    }
}

export const layThongTinHeThongRap = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyRapService.LayThongTinHeThongRap();
            dispatch({
                type: GET_THONG_TIN_HE_THONG_RAP,
                data: result.data
            })
        } catch(err) {
            console.log(err)
        }
    }
}