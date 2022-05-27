import { MANHOM } from "../util/settings/config";
import { baseService } from "./baseServices";

class QuanLyNguoiDungService extends baseService {
    dangNhap = (data) => {
        return this.post(`/api/QuanLyNguoiDung/DangNhap`, data);
    }
    dangKy = (data) => {
        return this.post(`/api/QuanLyNguoiDung/DangKy`, data);
    }
    layThongTin = (taiKhoan) => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan)
    }
    capNhat = (data) => {
        return this.put(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data)
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();