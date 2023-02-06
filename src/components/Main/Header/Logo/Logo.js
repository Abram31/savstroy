import React from 'react'
import module from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={module.wrapper}>
      <a href='' className={module.logo}>
        <img className={module.img} src='/img/SAV_logo.png' alt=''></img>
      </a>
    </div>
  )
}
