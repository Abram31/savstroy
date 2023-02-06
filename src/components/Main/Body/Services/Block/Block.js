import React from 'react'
import module from './Block.module.scss'
import Button from 'react-bootstrap/Button';


export const Block = ({ title, link, imgPath }) => {
    return (
        <div className={module.wrapper} style={{backgroundImage: {imgPath}}}>
            <div className={module.container}>
                <h3 className={module.title}>{title}</h3>
                <Button href={link} className={module.button}>
                    Подробнее &#8594;
                </Button>
            </div>
        </div>
    )
}
