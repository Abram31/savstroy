import React from 'react'
import { basePath } from '../../../../routes/routes'
import module from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={module.wrapper}>
      <a href={basePath} className={module.logo}>
        <img className={module.img} src={`${process.env.PUBLIC_URL}/img/SAV_logo.png`} alt=''></img>
      </a>
    </div>
  )
}
