import React from 'react'
import { servicesData } from '../../../../data/aboutServices'
import module from './TypesWorks.module.scss'
import { Link } from 'react-router-dom';


export const TypesWorks = () => {
  return (
    <div className={module.wrapper}>
      <h5 className={module.title}>Виды работ</h5>
        <div className={module.container}> 

        {Object.entries(servicesData).map((data, index) => <Link key={index} to={data[1].link} className={module.types_works}>{`- ${data[1].title}`}</Link>)}
      </div> 
    </div>
  )
}
