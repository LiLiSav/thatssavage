import { createFileRoute } from "@tanstack/react-router";
import partyCollage from "assets/prints/clothes/collage.jpg";
import fitnessCollage from "assets/prints/fitness/collage.jpg";
import miscCollage from "assets/prints/misc/bottles.jpg";
import maskCollage from "assets/prints/otherwear/masks.jpg";
import workWearCollage from "assets/prints/workwear/collage.jpg";
import {
  clothesImages,
  fitnessImages,
  miscArray,
  otherWear,
  workWear,
} from "components/Prints/Arrays";
import { CollagePic } from "components/Prints/CollagePic";

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

export const Route = createFileRoute("/prints")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container p-12 md:my-4">
      <h1 className="text-yellow-dark">Prints</h1>
      <h3 className="mb-4">
        Hard to beat prices for every printing occasion. Click on the photos to
        see more!
      </h3>
      <ul className="list-none pl-8 @lg:pl-0">
        <li>
          <b>Parties: </b> Hen & Stag parties, seasonal printing, funny and
          special occasion prints
        </li>
        <li>
          <b>Fitness: </b>GAA Club logos, fitness t-shirts, Rugby Teams, Gym
          Equipment, 5-a-side
        </li>
        <li>
          <b>Outerwear: </b>Masks, neck ties, hats, snoods, shorts, tote bags,
          school bags
        </li>
        <li>
          <b>Workwear: </b>Aprons, bodywarmers, jackets, hi-vis jackets
        </li>
        <li>
          <b>Miscellaneous: </b>Water bottles, wallets, umbrellas, slippers,
          yoga mats
        </li>
      </ul>
      <div className="mt-1 mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {collagePics.map((collage) => {
          return <CollagePic key={collage.title} collage={collage} />;
        })}
      </div>
    </div>
  );
}
