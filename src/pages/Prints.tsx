import { CollagePic } from "components/Prints/CollagePic";
import styles from "styles/Prints.module.scss";
import {
  clothesImages,
  fitnessImages,
  miscArray,
  otherWear,
  workWear,
} from "components/Prints/Arrays";

import partyCollage from "assets/prints/clothes/collage.jpg";
import fitnessCollage from "assets/prints/fitness/collage.jpg";
import maskCollage from "assets/prints/otherwear/masks.jpg";
import workWearCollage from "assets/prints/workwear/collage.jpg";
import miscCollage from "assets/prints/misc/bottles.jpg";

export interface ImageBlockProps {
  img: string;
  alt: string;
}

const collagePics = [
  { title: "Parties", collagePic: partyCollage, images: clothesImages },
  { title: "Fitness", collagePic: fitnessCollage, images: fitnessImages },
  { title: "Outerwear", collagePic: maskCollage, images: otherWear },
  { title: "Workwear", collagePic: workWearCollage, images: workWear },
  { title: "Miscellaneous", collagePic: miscCollage, images: miscArray },
];

export default function Prints() {
  return (
    <div className="container card shadow p-5 mb-md-3 mt-md-3">
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
