import { GET_DETAIL_MOVIE, GET_LIST_MOVIE } from "../types/ListMovieType";

const stateDefault = {
    arrMovie: [],
    movieDetail: {}
}

const ListMovieReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case GET_LIST_MOVIE: {
            state.arrMovie = action.data;
            return {...state}
        }
        case GET_DETAIL_MOVIE: {    
            state.movieDetail = action.data;
            return {...state}
        }
        default: return state;
    }
}

export default ListMovieReducer;