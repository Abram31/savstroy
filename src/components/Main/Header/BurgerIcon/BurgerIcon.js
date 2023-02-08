import React from 'react'
import module from './BurgerIcon.module.scss'
import style from '../Navigate/Navigate.module.scss'
import { navRef } from '../Navigate/Navigate'


export const BurgerIcon = () => {
    const handleClick = (e) => {
        e.target.classList.toggle(module.active)
        navRef.current.classList.toggle(style.active)
     }
    return (
        <div className={module.wrapper} onClick={handleClick}>
        </div>
    )
}
