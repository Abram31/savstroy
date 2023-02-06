import React from 'react'
import module from './Title.module.scss'

export const Title = () => {
    return (
        <h3 className={module.title}>Оказываем  услуги комплексно, <span className={module.lite_text}>совмещая отдельные виды работ</span> </h3>
    )
}
