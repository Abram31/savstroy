import React from 'react'
import { phonesData } from '../../../../constants/constants'
import { Phone } from './Phone/Phone'
import module from './Phones.module.scss'
import Button from 'react-bootstrap/Button';

export const Phones = () => {
  return (
    <div className={module.wrapper}>
      <div> {phonesData.map((phone, index) => <Phone phone={phone} key={index} />)} </div>
      <Button href={`tel:${phonesData[0]}`} className={module.button}>Позвоните нам</Button>
    </div>
  )
}
