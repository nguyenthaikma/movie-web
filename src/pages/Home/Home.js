import React from 'react'
import {Carousel} from 'antd'
import HomeCarousel from '../../templates/Home/Layout/Carousel/HomeCarousel'
import ListMovie from '../../templates/Home/Layout/ListMovie/ListMovie'
import TabMovie from '../../templates/Home/Layout/ListMovie/TabMovie'

export default function Home() {

    

    return (
        <>
            <HomeCarousel />
            <div className="container mx-auto">
                <ListMovie />
                <TabMovie />
            </div>
        </>

    )
}
