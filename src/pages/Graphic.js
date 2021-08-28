import drawing from '../images/in-development.jpg'

export default function Graphic() {
    return (
        <div className="page-container">
            <h1 className="graphic-design">Graphic Design</h1>
            <h3>Oops! We have got a bit of colouring in to do still.</h3>
            <img src={drawing} style={{ width:"100%"}}alt="page under construction"/>
        </div>
    )
}