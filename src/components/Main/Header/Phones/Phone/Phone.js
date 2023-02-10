import React from 'react'
import module from './Phone.module.scss'


export const Phone = ({phone}) => {
  return (
    <div className={module.phone}>{phone}</div>
  )
}
