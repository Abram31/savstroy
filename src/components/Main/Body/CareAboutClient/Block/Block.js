import React from 'react'
import module from './Block.module.scss'


export const Block = ({ title, iconPath, text }) => {
    return (
            <div className={module.wrapper} >
                <div className={module.container_icon} style={{ backgroundImage: { iconPath } }}></div>
                <div className={module.container}>
                    <h3>{title}</h3>
                    <span>{text}</span>
                </div>
            </div>
    )
}
