import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService"
import { message } from 'antd';
import { DANG_NHAP } from "../types/QuanLyNguoiDungType";
import { ACCOUNT } from "../../util/settings/config";

const success = (data) => {
    message.success(data);
};

const error = (data) => {
    message.error(data);
  };
  

export const dangNhap = (data, navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangNhap(data);
            if (result.status === 200) {
                success('Đăng nhập thành công!');
                dispatch({
                    type: DANG_NHAP,
                    data: result.data
                })
                dispatch({
                    type: 'DISPLAY_LOADING'
                })
                setTimeout(() => {
                    dispatch({type: 'HIDE_LOADING'})
                }, 400)
                navigate('/');
            }
        } catch (err) {
            console.log(err)
            console.log(err.response);
            error(err.response.data);
        }

    }
}


export const dangKy = (data, navigate) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.dangKy(data);
            if (result.status === 200) {
                success('Đăng ký thành công!');
                dispatch({
                    type: 'DISPLAY_LOADING'
                })
                setTimeout(() => {
                    dispatch({type: 'HIDE_LOADING'})
                }, 400)
                navigate('/login');
            }
        } catch (err) {
            console.log(err)
            console.log(err.response);
        }

    }
}

export const layThongTin = (taiKhoan) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.layThongTin(taiKhoan);
            if (result.status === 200) {
                dispatch({
                    type: 'layThongTin',
                    data: result.data
                })
            }
        } catch (err) {
            console.log(err)
            console.log(err.response);
        }

    }
}

export const capNhat = (data) => {
    return async (dispatch) => {
        try {
            const result = await quanLyNguoiDungService.capNhat(data);
            if (result.status === 200) {
                localStorage.setItem(ACCOUNT, JSON.stringify(result.data));
                dispatch({
                    type: 'DISPLAY_LOADING'
                })
                setTimeout(() => {
                    dispatch({ type: 'HIDE_LOADING' })
                }, 400)
                dispatch({ type: 'UPDATE'})
                success('Cập nhật thành công!!');
            }
        } catch (err) {
            console.log(err)
            console.log(err.response);
        }

    }
}
