import React from 'react'
import module from './Block.module.scss'


export const Block = ({ title, link, imgPath }) => {
    return (
        <div className={module.wrapper} style={{backgroundImage: `url(/img/typesWorks/${imgPath})`}}>
            <div className={module.container}>
                <h3 className={module.title}>{title}</h3>
                <button href={link} className={module.button}>
                    Подробнее &#8594;
                </button>
            </div>
        </div>
    )
}
