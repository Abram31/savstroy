import React from 'react'
import { amountYearsObjects } from '../../../../constants/constants'
import module from './AmountObjectsOld.module.scss'
import { Block } from './Blocks/Block'



export const AmountObjectsOld = () => {
    return (
        <section className={module.wrapper}>
            <div className={module.blocks}>
                {amountYearsObjects.map((data, index) => <Block key={index} number={data.number} text={data.text} />)}
            </div>

        </section>
    )
}
