import { GET_HE_THONG_QUAN_LY_RAP, GET_THONG_TIN_HE_THONG_RAP } from "../types/QuanLyRapTypes";

const stateDefault = {
    arrHeThongQuanLyRap: [],
    arrThongTinHeThongRap: []
}

const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_HE_THONG_QUAN_LY_RAP: {
            state.arrHeThongQuanLyRap = action.data;
            return {...state}
        }
        case GET_THONG_TIN_HE_THONG_RAP: {
            state.arrThongTinHeThongRap = action.data;
            return {...state}
        }
        default: return state;
    }
}

export default QuanLyRapReducer;