import React from 'react'
import module from './AboutUs.module.scss'
import { Description } from './Description/Description'
import { Title } from './Title/Title'

export const AboutUs = () => {
    return (
        <section className={module.wrapper}>
            <Title />
            <Description />
        </section>
    )
}
