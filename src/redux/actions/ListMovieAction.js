import { quanLyPhimService } from "../../services/QuanLyPhimServices";
import { GET_DETAIL_MOVIE, GET_LIST_MOVIE } from "../types/ListMovieType";


export const getListMovie = () => {
    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachPhim();
            dispatch({
                type: GET_LIST_MOVIE,
                data: result.data
            })

        } catch (err) {
            console.log(err);
        }
    }
}

export const getMovieDetail = (tenPhim) => {
    return async (dispatch) => {
        try {
            // console.log(Navigate)
            // console.log(tenPhim)
            const { status, data } = await quanLyPhimService.layChiTietPhim(tenPhim);

            if (status === 200) {
                dispatch({
                    type: GET_DETAIL_MOVIE,
                    data: data
                })

            }

        } catch (err) {
            console.log(err);
        }
    }
}