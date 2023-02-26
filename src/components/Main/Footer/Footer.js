import React from 'react'
import { Logo } from '../Header/Logo/Logo'
import module from './Footer.module.scss'
import { Contacts } from './Contacts/Contacts'
import { TypesWorks } from './TypesWorks/TypesWorks'



export const Footer = () => {
  return (
    <footer className={module.footer}>
      <div className={module.container_footer}>
        <Logo />
        <TypesWorks />
        <Contacts />


      </div>
    </footer>
  )
}
