import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import module from './Block.module.scss'


export const Block = ({ title, link, imgPath }) => {
    // const handleClick = () => {
    //     setTimeout(window.scrollTo(0, useRef()), 1000)

    // }
    return (
        <div className={module.wrapper}
        // style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/typesWorks/${imgPath})` }}
        >
            {/* <div className={module.container}>
            </div> */}
            <img className={module.img} src={`${process.env.PUBLIC_URL}/img/typesWorks/${imgPath}`} alt="service" />
            <h3 className={module.title}>{title}</h3>
            <Link className={module.link} to={link}>
                Подробнее &#8594;
            </Link>
        </div>
    )
}
