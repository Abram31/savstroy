import React from 'react'
import { Logo } from './Logo/Logo'
import module from './Header.module.scss'
import { Title } from './Title/Title'
import { Phones } from './Phones/Phones'
import { Navigate } from './Navigate/Navigate'
import { BurgerIcon } from './BurgerIcon/BurgerIcon'


export const Header = () => {
  return (
    <header className={module.header}>
      <div className={module.container_header}>
        <Logo />
        <Title />
        <Phones />
        <BurgerIcon />
        <div className={module.wrapper_navigate}>
        <Navigate />
        </div>

      </div>
    </header>
  )
}
