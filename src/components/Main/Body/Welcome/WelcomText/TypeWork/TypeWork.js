import React from 'react'
import module from './TypeWork.module.scss'


export const TypeWork = ({type}) => {
    return (
        <button className={module.wrapper}>
            {type}
        </button>
    )
}
