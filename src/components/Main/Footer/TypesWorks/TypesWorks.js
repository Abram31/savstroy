import React from 'react'
import { servicesData } from '../../../../constants/constants'
import module from './TypesWorks.module.scss'

export const TypesWorks = () => {
  return (
    <div className={module.wrapper}>
      <h5 className={module.title}>Виды работ</h5>
        <div className={module.container}> 

        {servicesData.map((data, index) => <a key={index} className={module.types_works}>{`- ${data.title}`}</a>)}
      </div> 
    </div>
  )
}
