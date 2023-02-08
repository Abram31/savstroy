import React from 'react'
import { Body } from './Body/Body'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import module from './Main.module.scss'

export const Main = () => {
  return (
  <main className={module.main}>
    <Header />
    <Body />
    <Footer />
  </main>
  )
}
