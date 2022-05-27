import { chonVe, LayDanhSachPhongVe, LayThongTinTaiKhoan } from "../types/QuanLyDatVeType";

const stateDefault = {
    danhSachPhongVe: {},
    danhSachVe: [],
    isDisabledDatVe: true,
    ThongTinTaiKhoan: {}
}

const QuanLyDatVeReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case LayDanhSachPhongVe: {
            state.danhSachPhongVe = action.data;
            // console.log(action.data)
            return {...state}
        }
        case chonVe: {
            const danhSachVeUpdate = [...state.danhSachVe];
            const index = danhSachVeUpdate.findIndex((item) => item.maGhe === action.ve.maGhe);
            if(index === -1) {
                danhSachVeUpdate.push(action.ve);
            } else {
                danhSachVeUpdate.splice(index, 1);
            }
            if(danhSachVeUpdate.length > 0) {
                state.isDisabledDatVe = false;
            } else {
                state.isDisabledDatVe = true;
            }
            state.danhSachVe = danhSachVeUpdate;
            return {...state}
        }
        case LayThongTinTaiKhoan: {
            state.ThongTinTaiKhoan = action.data;
            return {...state}
        }
        default: return {...state}
    }
}

export default QuanLyDatVeReducer;