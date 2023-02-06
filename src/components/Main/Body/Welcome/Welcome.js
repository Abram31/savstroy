import React from 'react'
import module from './Welcome.module.scss'
import { WelcomeText } from './WelcomText/WelcomeText'

export const Welcome = () => {
    return (
        <section className={module.wrapper}>
            <WelcomeText />
        </section>
    )
}
