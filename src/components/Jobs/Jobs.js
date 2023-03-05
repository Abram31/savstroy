import React, { useEffect } from 'react'
import { Footer } from '../Main/Footer/Footer'
import { Header } from '../Main/Header/Header'
import { Block } from './Block/Block'
import module from './Jobs.module.scss'
import { Title } from './Title/Title'



export const Jobs = () => {
    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:5000/data', { mode: 'no-cors' })
            const data = await res.json()
            console.log(data.jobs);
        })()
    },[])

    return (
        <>
            <Header />
            <section className={module.wrapper}>
                <div className={module.container}>
                    <Title />
                    <div className={module.container_jobs}>
                        {/* <Block /> */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
