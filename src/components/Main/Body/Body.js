import React from 'react'
import { AboutUs } from './AboutUs/AboutUs'
import { AmountObjectsOld } from './AmountObjectsOld/AmountObjectsOld'
import module from './Body.module.scss'
import { CareAboutClient } from './CareAboutClient/CareAboutClient'
import { CarouselBlock } from './CarouselBlock/CarouselBlock'
import { OurCustomers } from './OurCustomers/OurCustomers'
import { Services } from './Services/Services'
import { Welcome } from './Welcome/Welcome'


export const Body = () => {
    return (
        <main className={module.main}>
            <Welcome />
            <Services />
            <CareAboutClient />
            <AmountObjectsOld />
            {/* <CarouselBlock /> */}
            <AboutUs />
            <OurCustomers />
        </main>
    )
}
