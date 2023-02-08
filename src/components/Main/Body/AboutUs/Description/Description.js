import React from 'react'
import { aboutUsData } from '../../../../../constants/constants'
import { Block } from '../Block/Block'
import module from './Description.module.scss'



export const Description = () => {
    return (
        <div className={module.container}>
            <img className={module.img} src={`${process.env.PUBLIC_URL}/img/img_about_us_2.jpg`} alt='' />
            <div className={module.wrapper_description}>
                {aboutUsData.map((data, index) => <Block key={index} value={data.value} />)}
            </div>
        </div>
    )
}
