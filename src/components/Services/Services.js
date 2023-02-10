import React from 'react'
import { servicesData } from '../../data/aboutServices'
import { Footer } from '../Main/Footer/Footer'
import { Header } from '../Main/Header/Header'
import { Block } from './Block/Block'
import module from './Services.module.scss'
import { Title } from './Title/Title'



export const Services = () => {
    return (
        <>
            <Header />
            <section className={module.wrapper}>
                <div className={module.container}>

                    <Title />
                    <div className={module.container_services}>

                        {Object.entries(servicesData).map((item, index) => {
                            return <Block key={index} text={item[1].text} title={item[1].title} />
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
