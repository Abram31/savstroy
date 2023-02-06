import React from 'react'
import { servicesData } from '../../../../constants/constants'
import { Block } from './Block/Block'
import module from './Services.module.scss'
import { Title } from './Title/Title'

export const Services = () => {
    return (
        <section className={module.wrapper}>
            <Title />
            <div className={module.container}>
                {servicesData.map((data, index) => <Block key={index} title={data.title} link={data.link} imgPath={data.imgPath} />)}
            </div>
        </section>
    )
}
