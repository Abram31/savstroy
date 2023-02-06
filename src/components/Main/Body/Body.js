import React from 'react'
import module from './Body.module.scss'
import { Welcom } from './Welcom/Welcom'

export const Body = () => {
    return (
        <main className={module.main}>
            <Welcom />
        </main>
    )
}
