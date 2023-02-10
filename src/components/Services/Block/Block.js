import React from 'react'
import module from './Block.module.scss'



export const Block = ({ title, text }) => {
    return (
        <div className={module.wrapper}>
            <h5 className={module.title}>{title}</h5>
            <p className={module.text}>
                {text}
            </p>
        </div>
    )
}
