import React from 'react';
import '../../App.css';
import ItemCards from '../ItemCards.js'
import PicCarousel from '../PicCarousel';

export default function Home() {
     return (
         <>
             <ItemCards />
             <PicCarousel />
         </>
     );
}