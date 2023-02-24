import React, { useEffect, useRef } from 'react'
import { typesWorks } from '../../../../../constants/constants'
import { TypeWork } from './TypeWork/TypeWork'
import module from './WelcomeText.module.scss'

export const WelcomeText = () => {
    const container = useRef(null)

    useEffect(()=>{
        setTimeout(()=>{
            container.current.classList.add(module.container_load)
        }, 100)
        console.log('useEffect');
    },[])
    return (
        <div className={module.wrapper} >
            <div ref={container} className={module.container} >
                <p className={module.title}>ВЫПОЛНИМ <span className={module.highlight}>КАПИТАЛЬНЫЙ РЕМОНТ</span>  И <span className={module.highlight}>СТРОИТЕЛЬСТВО</span>  ДОМОВ</p>
                <div className={module.buttons}>
                    {typesWorks.map((type, index) => <TypeWork type={type} key={index + type} />)}
                </div>
            </div>
        </div>
    )
}
