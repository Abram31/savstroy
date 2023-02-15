import React from 'react'
import { aboutUs } from '../../../data/aboutUs'
import module from './Block.module.scss'
import { Logo } from './Logo/Logo'



export const Block = () => {
    return (
        <div className={module.wrapper}>
            <div className={module.head}>
                <Logo />
                <p className={module.head_text} >
                    <span className={module.name}>{aboutUs.name}</span> {`${aboutUs.head}`}
                </p>
            </div>
            <p className={module.text}> {aboutUs.body}
            </p>
            <p className={module.text}> <span className={module.requisites_title}>{aboutUs.requisitesTitle}</span> {aboutUs.requisites}
            </p>
        </div>
    )
}
