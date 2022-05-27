import React from 'react'
import Header from './Layout/Header/Header'
import Footer from './Layout/Footer/Footer'

export default function HomeTemplates(props) {
    return (
        <>
            <Header />
            <div style={{ marginTop: '96px' }}>
                <props.data />
            </div>
            <Footer />
        </>
    )
}
