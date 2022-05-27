import { GET_CAROUSEL } from "../types/CarouselType";

const stateDefault = {
    arrCarousel: [
        { maBanner: 1, maPhim: 1282, hinhAnh: 'http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png' }
    ],
    isLoading: false,
    navigate: {}
}

const CarouselReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case GET_CAROUSEL: {
            state.arrCarousel = action.data;
            return {...state}
        }
        case 'DISPLAY_LOADING': {
            state.isLoading = true;
            return {...state}
        }
        case 'HIDE_LOADING': {
            state.isLoading = false;
            return {...state}
        }
        default: return state;
    }
}

export default CarouselReducer;