import React from 'react'
import { phonesData } from '../../../../constants/constants'
import { Phone } from './Phone/Phone'
import module from './Phones.module.scss'

export const Phones = () => {
  return (
    <div className={module.wrapper}>
      <div className={module.container}> {phonesData.map((phone, index) => <Phone phone={phone} key={index} />)} </div>
    </div>
  )
}
