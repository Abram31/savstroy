import React from 'react'
import module from './Chapter.module.scss'



export const Chapter = ({ title, text, phones }) => {
    return (
        <div className={module.wrapper_chapter}>
            <h5 className={module.chapter_title}>{title}</h5>
            {phones ?
                phones.map((phone, index) => {
                    return <p key={index} className={module.chapter_text}>
                        {phone}
                    </p>
                })
                : <p className={module.chapter_text}>
                    {text}
                </p>}
        </div>
    )
}
