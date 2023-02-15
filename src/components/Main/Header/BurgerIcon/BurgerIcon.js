import React, { useRef } from 'react'
import module from './BurgerIcon.module.scss'
import style from '../Navigate/Navigate.module.scss'
import { navRef } from '../Navigate/Navigate'


export const BurgerIcon = () => {
    const burger = useRef()
    let activeStyle;
    const handleClick = (e) => {
        if (burger.current.classList.contains(module.active)) {
            console.log('remove');
            e.target.classList.remove(module.active)
            navRef.current.classList.remove(style.active)
        } else {
            e.target.classList.add(module.active)
            activeStyle = module.active;
            navRef.current.classList.add(style.active)
            const root = document.getElementById('root')
            root.addEventListener('click', () => {
                e.target.classList.remove(module.active)
                navRef.current.classList.remove(style.active)
            root.removeEventListener('click', () => {
                navRef.current.classList.remove(style.active)
            }, true)
        }, true)
    }

    }
    return (
        <div ref={burger} className={module.wrapper} onClick={handleClick}>
        </div>
    )
}
