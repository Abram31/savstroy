import React, { createRef, useEffect, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Footer } from '../Main/Footer/Footer'
import { Header } from '../Main/Header/Header'
import { Block } from './Block/Block'
import module from './Objects.module.scss'
import { Title } from './Title/Title'



export const Objects = () => {

    return (
        <>
            <Header />
            <section className={module.wrapper}>
                <div className={module.container}>
                    <Title />
                    <Block />
                </div>
            </section>
            <Footer />
        </>
    )
}
