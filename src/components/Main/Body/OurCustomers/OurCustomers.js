import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react'
import module from './OurCustomers.module.scss'
import { Title } from './Title/Title';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfiniteCarousel from 'react-leaf-carousel';
import { ourCustomers } from '../../../../constants/constants';


export const OurCustomers = () => {
    // const [index, setIndex] = useState(0);

    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };
    return (
        <section className={module.wrapper}>
            <Title />
            <div className={module.container}>
                <InfiniteCarousel breakpoints={[
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                    // dots={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={0}
                    slidesToScroll={1}
                    slidesToShow={3}
                    scrollOnDevice={true}
                    autoCycle={true}
                    cycleInterval={3000}
                    slidesSpacing={30}
                // incrementalSides={5}
                >
                    {ourCustomers.map((data, index) => {
                        return <div key={index} className={module.wrapper_icon}>
                            <img className={module.img}
                                alt=""
                                src={`/img/customers/${data}`}
                                style={{ maxWidth: '10rem' }}
                            />
                        </div>
                    })}

                </InfiniteCarousel>
            </div>

        </section>
    )
}
