import React from 'react'
import { Link } from 'react-router-dom'
import { basePath } from '../../../../routes/routes'
import module from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={module.wrapper}>
      <Link to={basePath} className={module.logo}>
        <img className={module.img} src={`${process.env.PUBLIC_URL}/img/SAV_logo.png`} alt=''></img>
      </Link>
    </div>
  )
}
