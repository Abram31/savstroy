import React from 'react'
import { careAboutData } from '../../../../constants/constants'
import { Block } from './Block/Block'
import module from './CareAboutClient.module.scss'
import { Title } from './Title/Title'



export const CareAboutClient = () => {
    return (
        <section className={module.wrapper}>
            <Title />
            <div className={module.blocks}>
                {careAboutData.map((data, index) => <Block key={index} title={data.title} text={data.text} iconPath={data.iconPath} />)}
            </div>
        </section>
    )
}
