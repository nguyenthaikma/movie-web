import { ACCOUNT, TOKEN } from "../../util/settings/config";
import { DANG_NHAP } from "../types/QuanLyNguoiDungType";

const stateDefault = {
    account: {

    },
    thongTin: {

    },
    status: false
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DANG_NHAP: {
            const { accessToken, ...account } = action.data;
            localStorage.setItem(TOKEN, accessToken);
            localStorage.setItem(ACCOUNT, JSON.stringify(account));
            return {...state}
        }
        case 'layThongTin': {
            state.thongTin = action.data;
            return {...state}
        }
        case 'CHANGE': {
            state.status = true;
            return {...state}
        }
        case 'UPDATE': {
            state.status = false;
            return {...state}
        }
        default: return {...state};
    }
}