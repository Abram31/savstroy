import React from 'react'
import { Footer } from '../Main/Footer/Footer'
import { Header } from '../Main/Header/Header'
import module from './Services.module.scss'
import { Title } from './Title/Title'



export const Services = () => {
    return (
        <>
            <Header />
            <section className={module.wrapper}>
                <Title />
            </section>
            <Footer />
        </>
    )
}
