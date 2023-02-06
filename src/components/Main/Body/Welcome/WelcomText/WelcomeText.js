import React, { useEffect, useRef } from 'react'
import { typesWorks } from '../../../../../constants/constants'
import { TypeWork } from './TypeWork/TypeWork'
import module from './WelcomeText.module.scss'

export const WelcomeText = () => {
    const container = useRef(null)
    const onLoad = (e) => {
        const element = e.target;
        console.log(element)

    }
    useEffect(()=>{
        container.current.classList.add(module.container_load)
    },[])
    return (
        <div className={module.wrapper} onClick={onLoad} >
            <div ref={container} className={module.container} >
                <p className={module.title}>ВЫПОЛНИМ <span className={module.highlight}>КАПИТАЛЬНЫЙ РЕМОНТ</span>  И <span className={module.highlight}>СТРОИТЕЛЬСТВО</span>  ДОМОВ</p>
                <div className={module.buttons}>
                    {typesWorks.map((type, index) => <TypeWork type={type} key={index + type} />)}
                </div>
            </div>
        </div>
    )
}
