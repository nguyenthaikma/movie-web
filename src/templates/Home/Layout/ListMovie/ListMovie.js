import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slick from '../../../../components/ReactSlick/Slick';
import { getListMovie } from '../../../../redux/actions/ListMovieAction'

export default function ListMovie() {

    const dispatch = useDispatch();

    const arrMovie = useSelector(state => state.ListMovieReducer.arrMovie);

    useEffect(() => {
        dispatch(getListMovie());
    }, [])

    return (
        <Slick data={arrMovie} />
    )
}
