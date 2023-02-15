import React from 'react'
import { phonesData } from '../../../../constants/constants'
import { Phone } from '../../Header/Phones/Phone/Phone'
import module from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div className={module.wrapper}>
      <h5 className={module.title}>Контакты</h5>
      <div className={module.container}>
        <span className={module.address}>220018 РеспубликаБеларусь,<br /> г.Минск, улица Привабная 5-2H</span>
        <span className={module.mail}>savstroi@bk.ru</span>
        {phonesData.map((phone, index) => <a key={index} className={module.phone} href={`tel:${phone}`}>{phone}</a>)}
      </div>
    </div>
  )
}
