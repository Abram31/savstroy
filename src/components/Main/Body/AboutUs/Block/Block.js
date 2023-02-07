import React from 'react'
import module from './Block.module.scss'



export const Block = ({value}) => {
    return (
        <div className={module.container}>
            <p className={module.text}>{value}</p>
        </div>
    )
}
