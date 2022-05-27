import React from 'react'
import { useSelector } from 'react-redux'
import './Loading.css'

export default function Loading() {

    const isLoading = useSelector(state => state.CarouselReducer.isLoading);

    if (isLoading) {
        return <div style={{display: 'flex'}} className="loading">
            <img src={require('../../assets/Gif/loading.gif')} alt="loading" />
        </div>
    } else {
        return <div style={{display: 'none'}} className="loading">
            <img src={require('../../assets/Gif/loading.gif')} alt="loading" />
        </div>
    }
}
