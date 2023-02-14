import React, { useState } from 'react'
import { Carousel } from 'react-carousel-minimal';
// import module from './CarouselBlock.module.scss'
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './Title/Title';
// import './Carousel.scss'



export function CarouselBlock() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const data = Array(10).fill(1).map((data, index) => {
        return {
            image: `${process.env.PUBLIC_URL}/img/objects/Melega_4/${index + 1}.jpg`,
            caption: ""
        }
    })
    
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }


    return (
        <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="none"
            slideImageFit="contain"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
            }}
        />
        // <section className={module.wrapper}>
        //     <div className={module.container}>
        //         <Title />
        //         <Carousel activeIndex={index} onSelect={handleSelect} interval={100000}>
        //             {Array(10).fill(1).map((data, index) => {
        //                 return (
        //                     <Carousel.Item key={index + data}>
        //                         <img
        //                             className={`d-block ${module.img}`}
        //                             src={`${process.env.PUBLIC_URL}/img/objects/Melega_4/${index + 1}.jpg`}
        //                             alt="First slide"
        //                         />
        //                         {/* <Carousel.Caption>
        //                         <h3>First slide label</h3>
        //                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //                     </Carousel.Caption> */}
        //                     </Carousel.Item>
        //                 )
        //             })}

        //         </Carousel >
        //     </div>
        // </section>
    );
}