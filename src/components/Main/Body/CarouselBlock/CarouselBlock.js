import React, { useState } from 'react'
import module from './CarouselBlock.module.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Title } from './Title/Title';
import './Carousel.scss'


export function CarouselBlock() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <section className={module.wrapper}>
            <div className={module.container}>
                <Title />
                <Carousel activeIndex={index} onSelect={handleSelect} interval={1500}>
                    {Array(11).fill(1).map((data, index) => {
                        return (
                            <Carousel.Item key={index + data}>
                                <img
                                    className={`d-block ${module.img}`}
                                    src={`/img/objects/Melega_4/${index + 1}.jpg`}
                                    alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })}

                </Carousel >
            </div>
        </section>
    );
}