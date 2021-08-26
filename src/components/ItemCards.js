import './CardOptions.css';
import CardOptions from './CardOptions';
import mask from './images/mask.jpg';
import maskf from './images/maskf.png';
import business from './images/business.jpg';
import businessf from './images/businessf.png';
import hens from './images/hens.jpg';
import hensf from './images/hensf.png';
import sports from './images/sporting.jpg';
import sportsf from './images/sportingf.png';
import design from './images/Design.png';
import designf from './images/Design.png';
import schools from './images/school.jpg';
import schoolsf from './images/schoolf.png';
import jersey from './images/jersey.jpg';
import jerseyf from './images/jerseyf.png';
import misc from './images/misc.jpg';
import miscf from './images/miscf.png';
import occasions from './images/occasion.jpg';
import occasionsf from './images/occasionsf.png';


export default function ItemCards() {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Check out what we can do!</h1>
            </div>
            
            <ul className="cards-container">
                <CardOptions
                    src={mask}
                    srcb={maskf}
                    listText={["Business Logos", "Sporting Teams", "Professional Settings", "Small, Medium & Large fit"]}
                    label="Personalised Face Masks"
                    alt="Customer ready masks"
                    bgColour= "dgry"
                />
                < CardOptions
                    src={business}
                    srcb={businessf}
                    listText={["Polo Shirts/T-Shirts", "Softshell Jackets", "Hoodies/Sweatshirts", "High Visibility Workwear, etc."]}
                    label="Business Printing"
                    alt="Busines ready attire"
                    bgColour="yllw"
                />
                <CardOptions
                    src={hens}
                    srcb={hensf}
                    listText={["Custom Design", "Hen/Stag Printed Free"]}
                    label="Hen & Stag Parties"
                    colour="#000"
                    alt="Hens and stags novelty tops"
                    bgColour="lgry"
                />

                <CardOptions
                    src={sports}
                    srcb={sportsf}
                    listText={["GAA Club Teams", "GAA County Teams", "Rugby Teams", "Football Teams, etc."]}
                    label="Sporting Attire"
                    alt="Sporting Garments printed"
                    bgColour="lgry"
                />
                <CardOptions
                    src={design}
                    srcb={designf}
                    listText={["Simple, Clean, Effective Design", "PDF version for stationary print & PNG for online & Social Media"]}
                    label="Graphic Design"
                    alt="Lappin Logo"
                    bgColour="dgry"
                />
                <CardOptions
                    src={schools}
                    srcb={schoolsf}
                    listText={["Leaver Hoodies", "School Gym Sacs", "School Gear", "School T-Shirts, etc."]}
                    label="Graduation Printing"
                    alt="Personalised Graduation Garments"
                    bgColour="yllw"
                />

                <CardOptions
                    src={jersey}
                    srcb={jerseyf}
                    listText={["Name & Number Print", "Premier League, SPL, Seria A, La Liga, etc." ]}
                    label="Replica Jersey Printing"
                    alt="Personilised replica jerseys"
                    bgColour="yllw"

                />
                <CardOptions
                    src={misc}
                    srcb={miscf}
                    listText={["Hip Flasks / Umbrellas", "Mouse Mats / Teddy Bears", "Water Bottle Sleeve", "High Vis/Glow in the Dark Print"]}
                    label="Other Printing Options"
                    alt="Misc. printing options"
                    bgColour="dgry"
                />
                <CardOptions
                    src={occasions}
                    srcb={occasionsf}
                    listText={["Confirmations / Communions", "Birthdays / Mothers/Fathers Day", "Seasonal Printing", "(St. Patrick's Day, Easter, Halloween, Christmas, etc.)"]}
                    label="Special Occasions"
                    alt="Memorable moments printing"
                    bgColour="lgry"
                />
            </ul>

        </div>
    )
}