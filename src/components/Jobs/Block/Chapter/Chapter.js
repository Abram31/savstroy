import React from 'react'
import module from './Chapter.module.scss'



export const Chapter = ({ title, text, phones, name }) => {
    return (
        <div className={module.wrapper_chapter}>
            <h5 className={module.chapter_title}>{title}</h5>
            <h5 className={module.chapter_title}>{name}</h5>
            {phones ?
                <div className={module.wrapper_phones}>
                    {phones.map((phone, index) => {
                        return (
                            <a href={`tel:${phone}`} key={index + phone} className={module.chapter_text}>
                                {phone}
                            </a>)
                    })}
                </div>
                : <p className={module.chapter_text}>
                    {text}
                </p>}
        </div>
    )
}
