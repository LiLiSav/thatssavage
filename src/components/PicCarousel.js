import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function PicCarousel() {
    return (
        <div className="container p-5" >
            <h3>Look at some of our happy customers!</h3>
            <Carousel wrap="true" style={{ position: "relative"}}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./images/IM1.jpg"
                        alt="Happy Customer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./images/IM2.jpg"
                        alt="Happy Customer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./images/IM10.jpg"
                        alt="Happy Customer"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}