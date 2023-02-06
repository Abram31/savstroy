import React from 'react'
import module from './Welcom.module.scss'
import { WelcomText } from './WelcomText/WelcomText'

export const Welcom = () => {
    return (
        <section className={module.wrapper}>
            <WelcomText />
        </section>
    )
}
