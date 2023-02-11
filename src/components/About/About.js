import React, { createRef, useEffect, useRef } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { servicesData } from '../../data/aboutServices'
import { Footer } from '../Main/Footer/Footer'
import { Header } from '../Main/Header/Header'
import { Block } from './Block/Block'
import module from './About.module.scss'
import { Title } from './Title/Title'



export const About = () => {
  
    return (
        <>
            <Header />
            <section className={module.wrapper}>
                <div className={module.container}>

                    <Title />
                    <div className={module.container_services}>
                        {/* {Object.entries(servicesData).map((item, index) => {
                            return <Block key={index} text={item[1].text} title={item[1].title} id={item[0]} />
                        })} */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
