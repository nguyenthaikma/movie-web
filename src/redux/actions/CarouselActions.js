import axios from "axios"
import { GET_CAROUSEL } from "../types/CarouselType"

export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const result = await axios({
                url: 'http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner',
                method: 'GET'
            })

            dispatch({
                type: GET_CAROUSEL,
                data: result.data.content
            })

        } catch (err) {
            console.log(err);
        }
    }
}