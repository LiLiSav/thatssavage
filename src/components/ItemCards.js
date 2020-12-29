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
                    src="./images/mask.jpg"
                    text1="Business Logos"
                    text2="Sporting Teams"
                    text3="Professional Settings"
                    text4="Small, Medium & Large fit"
                    label="Personalised Face Masks"
                    alt="Customer ready masks"
                    bgColour= "dgry"   
                />
                <CardOptions
                    src="./images/business.jpg"
                    text1="Polo Shirts/T-Shirts"
                    text2="Softshell Jackets"
                    text3="Hoodies/Sweatshirts"
                    text4="High Visibility Workwear, etc."
                    label="Business Printing"
                    alt="Busines ready attire"
                    bgColour="yllw"
                />
                <CardOptions
                    src="./images/hens.jpg"
                    text1="Custom Design"
                    text2="Hen/Stag Print Free"
                    label="Hen & Stag Parties"
                    colour="#000"
                    alt="Hens and stags novelty tops"
                    bgColour="lgry"
                />

                <CardOptions
                    src="./images/sporting.jpg"
                    text1="GAA Club Teams"
                    text2="GAA County Teams"
                    text3="Rugby Teams"
                    text4="Football Teams, etc."
                    label="Sporting Attire"
                    alt="Sporting Garments printed"
                    bgColour="lgry"
                />
                <CardOptions
                    src="./images/lappin.jpg"
                    text1="Simple, Clean, Effective Design"
                    text2="PDF version for stationary print & PNG for online & Social Media"
                    label="Graphic Design"
                    alt="Lappin Logo"
                    bgColour="dgry"
                />
                <CardOptions
                    src="./images/school.jpg"
                    text1="Leaver Hoodies"
                    text2="School Gym Sacs"
                    text3="School Gear"
                    text4="School T-Shirts, etc."
                    label="Graduation Printing"
                    alt="Personalised Graduation Garments"
                    bgColour="yllw"
                />

                <CardOptions
                    src="./images/jersey.jpg"
                    text1="Name & Number Print"
                    text2="Premier League, SPL, Seria A, La Liga, etc."
                    label="Replica Jersey Printing"
                    alt="Personilised replica jerseys"
                    bgColour="yllw"

                />
                <CardOptions
                    src="./images/misc.jpg"
                    text1="Hip Flasks  Umbrellas"
                    text2="Mouse Mats Teddy Bears"
                    text3="Water Bottle Sleeve"
                    text4="High Vis/Glow in the Dark Print"
                    label="Other Printing Options"
                    alt="Misc. printing options"
                    bgColour="dgry"
                />
                <CardOptions
                    src="./images/occasion.jpg"
                    text1="Confirmations Communions"
                    text2="Birthdays Mothers/Fathers Day"
                    text3="Seasonal Printing"
                    text4="(St. Patrick's Day, Easter, Halloween, Christmas, etc.)"
                    label="Special Occasions"
                    alt="Memorable moments printing"
                    bgColour="lgry"
                />
                
            </ul>

        </div>
    )
    //1:09:14
}