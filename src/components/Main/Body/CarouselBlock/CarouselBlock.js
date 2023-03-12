import React from 'react'
import { Carousel } from 'react-carousel-minimal';



export function CarouselBlock() {
    const data = Array(12).fill(1).map((data, index) => {
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
    );
}