import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card'

export default function CardItem (props) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <li className="cards__item" data-color={props.colour}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className="cards__item__link">
            
                <Card onClick={handleClick}>
                    <Card.Body data-category={props.label} >
                        <Card.Img src={props.src} alt={props.alt} />
                    </Card.Body>
                </Card>


            
                <Card className="bg-dark text-white" onClick={handleClick}>
                        <Card.Title>{props.label}</Card.Title>
                        <Card.Text>
                            <li>{props.text1}</li>
                            <li>{props.text2}</li>
                            <li>{props.text3}</li>
                            <li>{props.text4}</li>
                        </Card.Text>
                </Card>

                
            
            </ReactCardFlip>
        </li>
    )

    /*return (
        <>
            <li className="cards__item" data-color={props.colour}>
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label} >
                        <img src={props.src} alt={props.alt}
                        className="cards__item__img" />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__items__text">
                            <li>{props.text1}</li>
                            <li>{props.text2}</li>
                            <li>{props.text3}</li>
                            <li>{props.text4}</li>
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    );*/
}