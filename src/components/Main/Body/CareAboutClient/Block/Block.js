import React from 'react'
import module from './Block.module.scss'


export const Block = ({ title, iconPath, text }) => {
    return (
            <div className={module.wrapper} >
            <div className={module.container_icon} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svg/carAbout/${iconPath})`}}></div>
                <div className={module.container}>
                <h3 className={module.title}>{title}</h3>
                    <span>{text}</span>
                </div>
            </div >
    )
}
