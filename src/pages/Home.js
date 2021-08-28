import ItemCards from '../components/ItemCards.js'
import IntroCards from '../components/IntroCards.js'
import PicCarousel from '../components/PicCarousel';

export default function Home() {
    return (
        <>
        <IntroCards />
        <ItemCards />
        <PicCarousel />
        </>
    );
}