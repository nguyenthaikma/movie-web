import { MANHOM } from "../util/settings/config";
import { baseService } from "./baseServices";

class QuanLyDatVeService extends baseService {
    layDanhSachVe = (maLichChieu) => {
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    datVe = (data) => {
        return this.post(`/api/QuanLyDatVe/DatVe`, data);
    }
    thongTinTaiKhoan = (taiKhoan) => {
        return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, taiKhoan)
    }
}

export const quanLyDatVeService = new QuanLyDatVeService();