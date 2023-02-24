import React from 'react'
import module from './SliderWorks.module.scss'
// import { Carousel } from 'react-carousel-minimal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



export const SliderWorks = ({title,text}) => {
    return (  
    <div className={module.container}>
            <h5 className={module.title}>{title}</h5>
            <p className={module.text}>{text}</p>
            <Carousel dynamicHeight={true} infiniteLoop={true}>
            {Array(5).fill(1).map((data,index)=> {
                return (
                    <div key={index}>
                        {/* <p className={module.description}>{title}</p> */}
                        <img className={module.img} src={`${process.env.PUBLIC_URL}/img/objects/Melega_4/${index+1}.jpg`} />
                    </div>
                )
            })}
    
    </Carousel>
</div>

) }

// = ({ galleries }) => {
//     return (
//         <>
//             {galleries.map((gallery, index) => (
//                 <Carousel
//                     key={gallery.id} // Add unique key prop
//                     data={gallery.images.map((image) => {
//                         return {
//                             image: image.url,
//                             caption: image.caption
//                         };
//                     })}
//                     time={3000}
//                     width="100%"
//                     height="400px"
//                     radius="10px"
//                     slideNumber={false}
//                     captionStyle={{
//                         fontSize: '2em',
//                         fontWeight: 'bold'
//                     }}
//                     slideStyle={{
//                         backgroundSize: 'contain',
//                         backgroundPosition: 'center',
//                         backgroundRepeat: 'no-repeat'
//                     }}
//                 />
//             ))}
//         </>
//     );
// };










// ({ title, text, amountSliders, path, key }) => {
//     const data = Array(amountSliders).fill(1).map((data, index) => {
//         return {
//             image: `${process.env.PUBLIC_URL}/img/objects/${path}/${index + 1}.jpg`,
//             caption: ""
//         }
//     })
    
//     const captionStyle = {
//         fontSize: '2em',
//         fontWeight: 'bold',
//     }
//     const slideNumberStyle = {
//         fontSize: '20px',
//         fontWeight: 'bold',
//     }


//     return (
//         <div className={module.wrapper}>
//             <div className={module.container}>
//                 <h2>{title}</h2>
//                 <p>{text}</p>
//                 <div style={{
//                     padding: "0 20px"
//                 }}>
//                     <Carousel key={key}
//                         data={data}
//                         time={2000}
//                         width="850px"
//                         height="500px"
//                         captionStyle={captionStyle}
//                         radius="10px"
//                         slideNumber={true}
//                         slideNumberStyle={slideNumberStyle}
//                         captionPosition="bottom"
//                         automatic={false}
//                         dots={true}
//                         pauseIconColor="white"
//                         pauseIconSize="40px"
//                         slideBackgroundColor="none"
//                         slideImageFit="cover"
//                         thumbnails={true}
//                         thumbnailWidth="100px"
//                         // style={{
//                         //     textAlign: "center",
//                         //     maxWidth: "850px",
//                         //     maxHeight: "500px",
//                         //     margin: "40px auto",
//                         // }}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }
