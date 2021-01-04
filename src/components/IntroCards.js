import React from 'react'
import './CardOptions.css';
import IntroItem from './IntroItem.js';



export default function IntroCards() {
    return (
        <div>
            <div className="full-page-container dgry">
                <div className="intro-container">
                    <div className="intro-heading">
                        <h3><b>For all your design needs, </b></h3>
                    </div>
                    <div>
                        <img src={'./images/Logo.PNG'} alt="Thatssavage" className="intro-pic-text" />
                    </div>
                    <div className="intro-heading">
                        <h3><b> has got you covered!</b></h3>
                    </div>
                </div>
            </div>
            <div >
                <div className="page-container">
                    <ul className="intro-cards-container">
                        <IntroItem
                            title="No Minimum Order"
                            text="We don't do min. orders, there are enough rules in life. If it is personal or for your whole business, you can get 1-100+ printed. This could be showbiz baby!"
                            icon="faUserPlus"
                        />
                        <IntroItem
                            title="Highest Quality"
                            text="We promise to work with you to provide the perfect solution for you or your business. From the apparel to the design, we got your back."
                            icon="/"
                        />
                        <IntroItem
                            title="Irish Owned"
                            text="We take pride in where we are from and what we do. By supporting us you are supporting local. We guarantee that what we produce is at the very highest standard and you know exactly where it comes from."
                            icon="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}