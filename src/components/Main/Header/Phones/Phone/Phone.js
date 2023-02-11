import React from 'react'
import module from './Phone.module.scss'


export const Phone = ({phone}) => {
  return (
    <a className={module.phone} href={`tel:${phone}`}>{phone}</a>
  )
}
