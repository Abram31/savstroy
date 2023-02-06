import React from 'react'
import module from './Body.module.scss'
import { CareAboutClient } from './CareAboutClient/CareAboutClient'
import { Services } from './Services/Services'
import { Welcome } from './Welcome/Welcome'


export const Body = () => {
    return (
        <main className={module.main}>
            <Welcome />
            <Services />
            <CareAboutClient />
        </main>
    )
}
