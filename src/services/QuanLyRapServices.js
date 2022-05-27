import { MANHOM } from "../util/settings/config";
import { baseService } from "./baseServices";

export class QuanLyRapServices extends baseService {
    LayThongTinLichChieuHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MANHOM}`);
    }
    LayThongTinHeThongRap = () => {
        return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
    }
}

export const quanLyRapService = new QuanLyRapServices();