import React from 'react'
import module from './Title.module.scss'



export const Title = () => {
    return (
        <h3 className={module.title}>  Готовы <span className={module.lite_text}> начать капитальный ремонт </span> 
            с надежной компанией?</h3>
    )
}
