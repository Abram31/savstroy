import React from 'react'
import { AboutUs } from './AboutUs/AboutUs'
import module from './Body.module.scss'
import { CareAboutClient } from './CareAboutClient/CareAboutClient'
import { CarouselBlock } from './CarouselBlock/CarouselBlock'
import { Services } from './Services/Services'
import { Welcome } from './Welcome/Welcome'


export const Body = () => {
    return (
        <main className={module.main}>
            <Welcome />
            <Services />
            <CareAboutClient />
            <CarouselBlock />
            <AboutUs />
        </main>
    )
}
