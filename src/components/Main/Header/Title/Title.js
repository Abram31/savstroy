import React from 'react'
import module from './Title.module.scss'


export const Title = () => {
  return (
  <div className={module.wrapper}>
    <div className={module.title}>ООО «САВ-Строймонтаж»</div>
    {/* <div className={module.address}>улица Привабная 5-2H</div> */}
  </div>
  )
}
