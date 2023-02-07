import React from 'react'
import module from './Block.module.scss'



export const Block = ({ number, text }) => {
    return (
        <div className={module.wrapper}>
            <span className={module.number}>{number}</span>
            <span className={module.text}>{text}</span>
        </div>
    )
}
