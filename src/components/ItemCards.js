import React from 'react'
import './CardOptions.css';
import CardOptions from './CardOptions';

export default function ItemCards() {
    return (
        <div className="page-container">
            <div className="container">
                <h1>Check out what we can do!</h1>
            </div>
            
            <ul className="cards-container">
                <CardOptions
                    src={"./images/mask.JPG"}
                    listText={["Business Logos", "Sporting Teams", "Professional Settings", "Small, Medium & Large fit"]}
                    label="Personalised Face Masks"
                    alt="Customer ready masks"
                    bgColour= "dgry"
                />
                < CardOptions
                    src={"./images/business.JPG"}
                    listText={["Polo Shirts/T-Shirts", "Softshell Jackets", "Hoodies/Sweatshirts", "High Visibility Workwear, etc."]}
                    label="Business Printing"
                    alt="Busines ready attire"
                    bgColour="yllw"
                />
                <CardOptions
                    src={"./images/hens.JPG"}
                    listText={["Custom Design", "Hen/Stag Print Free"]}
                    label="Hen & Stag Parties"
                    colour="#000"
                    alt="Hens and stags novelty tops"
                    bgColour="lgry"
                />

                <CardOptions
                    src={"./images/sporting.JPG"}
                    listText={["GAA Club Teams", "GAA County Teams", "Rugby Teams", "Football Teams, etc."]}
                    label="Sporting Attire"
                    alt="Sporting Garments printed"
                    bgColour="lgry"
                />
                <CardOptions
                    src={"./images/lappin.JPG"}
                    listText={["Simple, Clean, Effective Design", "PDF version for stationary print & PNG for online & Social Media"]}
                    label="Graphic Design"
                    alt="Lappin Logo"
                    bgColour="dgry"
                />
                <CardOptions
                    src={"./images/school.JPG"}
                    listText={["Leaver Hoodies", "School Gym Sacs", "School Gear", "School T-Shirts, etc."]}
                    label="Graduation Printing"
                    alt="Personalised Graduation Garments"
                    bgColour="yllw"
                />

                <CardOptions
                    src={"./images/jersey.JPG"}
                    listText={["Name & Number Print", "Premier League, SPL, Seria A, La Liga, etc." ]}
                    label="Replica Jersey Printing"
                    alt="Personilised replica jerseys"
                    bgColour="yllw"

                />
                <CardOptions
                    src={"./images/misc.JPG"}
                    listText={["Hip Flasks / Umbrellas", "Mouse Mats / Teddy Bears", "Water Bottle Sleeve", "High Vis/Glow in the Dark Print"]}
                    label="Other Printing Options"
                    alt="Misc. printing options"
                    bgColour="dgry"
                />
                <CardOptions
                    src={"./images/occasion.JPG"}
                    listText={["Confirmations / Communions", "Birthdays / Mothers/Fathers Day", "Seasonal Printing", "(St. Patrick's Day, Easter, Halloween, Christmas, etc.)"]}
                    label="Special Occasions"
                    alt="Memorable moments printing"
                    bgColour="lgry"
                />
            </ul>

        </div>
    )
}