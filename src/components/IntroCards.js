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
                        <img src={'./images/Logo.png'} alt="Thatssavage" className="intro-pic-text" />
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
                            text="There is no min. order. If it is personal or for your whole business, you can get 1-100+ printed. This could be showbiz baby!"
                            icon="faUserPlus"
                        />
                        <IntroItem
                            title="Highest Quality"
                            text="We promise to work with you to provide the perfect solution for you or your business. From the apparel to the design, we got your back."
                            icon="/"
                        />
                        <IntroItem
                            title="No Minimum Order"
                            text="There is no min order. If it is personal or for your whole business, you can get 1-100+ printed. This could be showbiz baby!"
                            icon="/"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}