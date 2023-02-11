import React from 'react'
import { servicesData } from '../../../../data/aboutServices'
import { Block } from './Block/Block'
import module from './Services.module.scss'
import { Title } from './Title/Title'

export const Services = () => {
    return (
        <section className={module.wrapper}>
            <Title />
            <div className={module.container}>
                {Object.entries(servicesData).map((data, index) => <Block key={index} title={data[1].title} link={data[1].link} imgPath={data[1].imgPath} />)}
            </div>
        </section>
    )
}
