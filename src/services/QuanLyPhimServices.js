import { MANHOM } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyPhimServices extends baseService {
    layDanhSachPhim = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`)
    }
    layChiTietPhim = (maPhim) => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`)
    }
}

export const quanLyPhimService = new QuanLyPhimServices();