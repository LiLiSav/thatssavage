import React from 'react';
import '../../App.css';
import ItemCards from '../ItemCards.js'
import IntroCards from '../IntroCards.js'
import PicCarousel from '../PicCarousel';

export default function Home() {
     return (
         <>
            <IntroCards />
            <ItemCards />
            <PicCarousel />
         </>
     );
}