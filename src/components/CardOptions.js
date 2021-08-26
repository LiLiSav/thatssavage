import { useState } from 'react'
import './CardOptions.css'
import ReactCardFlip from 'react-card-flip';

export default function CardOptions(props) {
    const [isFlipped, setIsFlipped] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    
    return (
            <li>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
                <div className={`card-items ${props.bgColour}`} onClick={handleClick} >
                    <figure className={`card-fig ${props.bgColour}`} data-category={props.label}>
                        <img src={props.src} alt={props.alt} className="card-pic" />
                    </figure>
                </div>
                        
                <div className={`card-items ${props.bgColour}`} onClick={handleClick}>
                    <div className="back-card-block">
                        <ul className="card-text">
                            {props.listText.map((lstText, index) => (
                            <li key={index}>{lstText}</li>
                            ))}
                        </ul>
                        <img src={props.srcb} alt={props.alt} className="back-card-pic" />
                                
                    </div>
                </div>
                </ReactCardFlip>
            </li>
    )
}