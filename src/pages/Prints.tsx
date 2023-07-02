import { CollagePic } from "components/Prints/CollagePic";
import styles from "styles/Prints.module.scss";
import {
  clothesImages,
  fitnessImages,
  miscArray,
  otherWear,
  workWear,
} from "components/Prints/Arrays";

export interface ImageBlockProps {
  img: string;
  alt: string;
}

const collagePics = [
  { title: "Parties", collagePic: "/prints/clothes/collage.jpg", images: clothesImages },
  { title: "Fitness", collagePic: "/prints/fitness/collage.jpg", images: fitnessImages },
  { title: "Outerwear", collagePic: "/prints/otherwear/masks.jpg", images: otherWear },
  { title: "Workwear", collagePic: "/prints/workwear/collage.jpg", images: workWear },
  { title: "Miscellaneous", collagePic: "/prints/misc/bottles.jpg", images: miscArray },
];

export default function Prints() {
  return (
    <div className="container card shadow p-5 mb-3 mt-3">
      <h1 className="title text-warning">Prints</h1>
      <hr />
      <h3>Hard to beat prices for every printing occasion. Click on the photos to see more!</h3>
      <ul className={styles.listOfPrints}>
        <li>
          <b>Parties: </b> Hen & Stag parties, seasonal printing, funny and special occasion prints
        </li>
        <li>
          <b>Fitness: </b>GAA Club logos, fitness t-shirts, Rugby Teams, Gym Equipment, 5-a-side
        </li>
        <li>
          <b>Outerwear: </b>Masks, neck ties, hats, snoods, shorts, tote bags, school bags
        </li>
        <li>
          <b>Workwear: </b>Aprons, bodywarmers, jackets, hi-vis jackets
        </li>
        <li>
          <b>Miscellaneous: </b>Water bottles, wallets, umbrellas, slippers, yoga mats
        </li>
      </ul>
      <div className="row g-3 mt-1 mb-4">
        {collagePics.map((collage) => {
          return <CollagePic key={collage.title} collage={collage} />;
        })}
      </div>
    </div>
  );
}
