import React from 'react'
import module from './Block.module.scss'
import { SliderWorks } from './SliderWorks/SliderWorks'



export const Block = ({ title, text, id }) => {
    const galleries = [{
        id: 1, name: 'Gallery 1', images: [{ url: 'https://example.com/image1.jpg', caption: 'Image 1' }, { url: 'https://example.com/image2.jpg', caption: 'Image 2' }, { url: 'https://example.com/image3.jpg', caption: 'Image 3' }]
    },
    {
        id: 2,
        name: 'Gallery 2',
        images: [
            { url: 'https://example.com/image4.jpg', caption: 'Image 4' },
            { url: 'https://example.com/image5.jpg', caption: 'Image 5' },
            { url: 'https://example.com/image6.jpg', caption: 'Image 6' }
        ]
    }
    ];

    return (
        <div className={module.wrapper}>
            <h5 className={module.title} id={id}>{title}</h5>
            <p className={module.text} >
                {text}
            </p>
            {/* {Array(2).fill(1).map((item, index) => { */}
                {/* return  */}
            <SliderWorks title={'Капитальный ремонт жилого дома №2 по ул.Ленина в г.Минске'} text={'Выполнялись общестроительные, сантехнические электромонтажные работы '}/>

{/* })} */}
        </div>
    )
}
