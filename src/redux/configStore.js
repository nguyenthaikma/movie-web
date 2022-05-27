import {applyMiddleware, combineReducers, createStore} from 'redux';
import reduxThunk from 'redux-thunk';
import CarouselReducer from './reducers/CarouselReducer';
import ListMovieReducer from './reducers/ListMovieReducer';
import QuanLyDatVeReducer from './reducers/QuanLyDatVeReducer';
import { QuanLyNguoiDungReducer } from './reducers/QuanLyNguoiDungReducer';
import QuanLyRapReducer from './reducers/QuanLyRapReducers';


const rootReducer = combineReducers({
    CarouselReducer,
    ListMovieReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default store