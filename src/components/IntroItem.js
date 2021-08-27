import './IntroItem.css'


export default function IntroItem(props) {
    return (
        <>
            <li>
                <div className="introCard-contianer">
                    <h4><b>{props.title}</b></h4>
                    <p>{props.text}</p>
                </div>
            </li>
        </>
    )
};