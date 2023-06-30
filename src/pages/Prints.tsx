import { CollagePic } from "components/Prints/CollagePic";
import styles from "styles/Prints.module.scss";

export interface ImageBlockProps {
  img: string;
  alt: string;
}

const clothesImages: ImageBlockProps[] = [
  {
    img: "/prints/clothes/oclock.jpg",
    alt: "bad bitch oclock",
  },
  {
    img: "/prints/clothes/colourblind.jpg",
    alt: "colour blind tshirt",
  },
  {
    img: "/prints/clothes/fixit.jpg",
    alt: "mahon fix it",
  },
  {
    img: "/prints/clothes/tagMeGently.jpg",
    alt: "tag jersey",
  },
  {
    img: "/prints/clothes/tiktok.jpg",
    alt: "tik tok tshirt",
  },
  {
    img: "/prints/clothes/micksStag.jpg",
    alt: "micks stag",
  },
  {
    img: "/prints/clothes/amyHen.jpg",
    alt: "Amy's Hen Party",
  },
  {
    img: "/prints/clothes/birthday.jpg",
    alt: "3rd birthday t-shirt",
  },
  {
    img: "/prints/clothes/aoifeBirthday.jpg",
    alt: "21st birthday teddy bear",
  },
];

const fitnessImages: ImageBlockProps[] = [
  {
    img: "/prints/fitness/gakpo.jpg",
    alt: "gakpo jersey",
  },
  {
    img: "/prints/fitness/monaghan.jpg",
    alt: "monaghan utd tshirt",
  },
  {
    img: "/prints/fitness/pinkArsenal.jpg",
    alt: "pink arsenal top",
  },
  {
    img: "/prints/fitness/sgElite.jpg",
    alt: "sg elite gym top",
  },
  {
    img: "/prints/fitness/williamson.jpg",
    alt: "williamson name on jersey",
  },
  {
    img: "/prints/fitness/newcastle.jpg",
    alt: "newcastle utd jersey",
  },
];

const otherWear: ImageBlockProps[] = [
  {
    img: "/prints/otherwear/jds.jpg",
    alt: "JDS hat",
  },
  {
    img: "/prints/otherwear/finco.jpg",
    alt: "Finco snood",
  },
  {
    img: "/prints/otherwear/tie.jpg",
    alt: "Rugby neck tie",
  },
  {
    img: "/prints/misc/drumsheeny.jpg",
    alt: "Tote bags",
  },
  {
    img: "/prints/otherwear/verify.jpg",
    alt: "Verify logo cap",
  },
  {
    img: "/prints/otherwear/shorts.jpg",
    alt: "no.10 on shorts",
  },
];

const workWear: ImageBlockProps[] = [
  {
    img: "/prints/workwear/arch.jpg",
    alt: "McGuigan architects",
  },
  {
    img: "/prints/workwear/blasta.jpg",
    alt: "Blasta jumper",
  },
  {
    img: "/prints/workwear/kulBeans.jpg",
    alt: "Kul Beans apron",
  },
  {
    img: "/prints/workwear/mcclave.jpg",
    alt: "mcclave tshirt",
  },
  {
    img: "/prints/workwear/scania.jpg",
    alt: "Scania bodywarmer",
  },
  {
    img: "/prints/workwear/slow.jpg",
    alt: "slow young horse hi-vis jacket",
  },
];

const miscArray: ImageBlockProps[] = [
  {
    img: "/prints/misc/coraBag.jpg",
    alt: "Small wetproof bags",
  },
  {
    img: "/prints/misc/penguins.jpg",
    alt: "penguings with printing on belly",
  },
  {
    img: "/prints/misc/pillow.jpg",
    alt: "pillow for nana",
  },
  {
    img: "/prints/misc/schoolBag.jpg",
    alt: "School bag",
  },
  {
    img: "/prints/misc/belts.jpg",
    alt: "Lifting belts",
  },
  {
    img: "/prints/misc/flag.jpg",
    alt: "Flag with paddy on it",
  },
];

const collagePics = [
  { title: "Parties", collagePic: "/prints/clothes/collage.jpg", images: clothesImages },
  { title: "Fitness", collagePic: "/prints/fitness/collage.jpg", images: fitnessImages },
  { title: "Outerwear", collagePic: "/prints/otherwear/masks.jpg", images: otherWear },
  { title: "Workwear", collagePic: "/prints/workwear/collage.jpg", images: workWear },
  { title: "Miscellaneous", collagePic: "/prints/misc/bottles.jpg", images: miscArray },
];

export default function Prints() {
  return (
    <div className="container">
      <h1 className="title text-warning">Prints</h1>
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
