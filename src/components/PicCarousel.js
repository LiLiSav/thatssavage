import Carousel from 'react-bootstrap/Carousel'
import image1 from './images/Im1.jpg'
import image2 from './images/IM2.jpg'
import image10 from './images/IM10.jpg'

export default function PicCarousel() {
    return (
        <div className="container p-5" >
            <h3>Look at some of our happy customers!</h3>
            <Carousel wrap={true} style={{ position: "relative"}}>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Happy Customer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Happy Customer"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={image10}
                        alt="Happy Customer"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}