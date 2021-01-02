import React from 'react'
import './CardOptions.css';
import CardOptions from './CardOptions';

/*text1 = "Business Logos"
text2 = "Sporting Teams"
text3 = "Professional Settings"
text4 = "Small, Medium & Large fit"

objects={"Business Logos", "Sporting Teams", "Professional Settings", "Small, Medium & Large fit"}*/

export default function ItemCards() {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Check out what we can do!</h1>
            </div>
            
            <ul className="cards-container">
                <CardOptions
                    src="./images/mask.jpg"
                    listText={["Business Logos", "Sporting Teams", "Professional Settings", "Small, Medium & Large fit"]}
                    label="Personalised Face Masks"
                    alt="Customer ready masks"
                    bgColour= "dgry"   
                />
                < CardOptions
                    src="./images/business.jpg"
                    listText={["Polo Shirts/T-Shirts", "Softshell Jackets", "Hoodies/Sweatshirts", "High Visibility Workwear, etc."]}
                    label="Business Printing"
                    alt="Busines ready attire"
                    bgColour="yllw"
                />
                <CardOptions
                    src="./images/hens.jpg"
                    listText={["Custom Design", "Hen/Stag Print Free"]}
                    label="Hen & Stag Parties"
                    colour="#000"
                    alt="Hens and stags novelty tops"
                    bgColour="lgry"
                />

                <CardOptions
                    src="./images/sporting.jpg"
                    listText={["GAA Club Teams", "GAA County Teams", "Rugby Teams", "Football Teams, etc."]}
                    label="Sporting Attire"
                    alt="Sporting Garments printed"
                    bgColour="lgry"
                />
                <CardOptions
                    src="./images/lappin.jpg"
                    listText={["Simple, Clean, Effective Design", "PDF version for stationary print & PNG for online & Social Media"]}
                    label="Graphic Design"
                    alt="Lappin Logo"
                    bgColour="dgry"
                />
                <CardOptions
                    src="./images/school.jpg"
                    listText={["Leaver Hoodies", "School Gym Sacs", "School Gear", "School T-Shirts, etc."]}
                    label="Graduation Printing"
                    alt="Personalised Graduation Garments"
                    bgColour="yllw"
                />

                <CardOptions
                    src="./images/jersey.jpg"
                    listText={["Name & Number Print", "Premier League, SPL, Seria A, La Liga, etc." ]}
                    label="Replica Jersey Printing"
                    alt="Personilised replica jerseys"
                    bgColour="yllw"

                />
                <CardOptions
                    src="./images/misc.jpg"
                    listText={["Hip Flasks / Umbrellas", "Mouse Mats / Teddy Bears", "Water Bottle Sleeve", "High Vis/Glow in the Dark Print"]}
                    label="Other Printing Options"
                    alt="Misc. printing options"
                    bgColour="dgry"
                />
                <CardOptions
                    src="./images/occasion.jpg"
                    listText={["Confirmations / Communions", "Birthdays / Mothers/Fathers Day", "Seasonal Printing", "(St. Patrick's Day, Easter, Halloween, Christmas, etc.)"]}
                    label="Special Occasions"
                    alt="Memorable moments printing"
                    bgColour="lgry"
                />
            </ul>

        </div>
    )
}