import React from 'react'
import { services } from '../../../../constants/constants'
import { servicesData } from '../../../../data/aboutServices'
import module from './TypesWorks.module.scss'

export const TypesWorks = () => {
  return (
    <div className={module.wrapper}>
      <h5 className={module.title}>Виды работ</h5>
        <div className={module.container}> 

        {Object.entries(servicesData).map((data, index) => <a key={index} className={module.types_works}>{`- ${data[1].title}`}</a>)}
      </div> 
    </div>
  )
}
