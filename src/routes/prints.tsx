import { createFileRoute } from "@tanstack/react-router";
import partyCollage from "assets/prints/clothes/collage.jpg";
import fitnessCollage from "assets/prints/fitness/collage.jpg";
import miscCollage from "assets/prints/misc/bottles.jpg";
import maskCollage from "assets/prints/otherwear/masks.jpg";
import workWearCollage from "assets/prints/workwear/collage.jpg";
import { CollagePic } from "components/Prints/CollagePic";
import {
  clothesImages,
  fitnessImages,
  miscArray,
  otherWear,
  workWear,
} from "content";

const collagePics = [
  {
    title: "Parties",
    description:
      "Hen & Stag parties, seasonal printing, funny and special occasion prints",
    tint: "bg-lemon",
    collagePic: partyCollage,
    images: clothesImages,
  },
  {
    title: "Fitness",
    description:
      "GAA Club logos, fitness t-shirts, Rugby Teams, Gym Equipment, 5-a-side",
    tint: "bg-aqua",
    collagePic: fitnessCollage,
    images: fitnessImages,
  },
  {
    title: "Outerwear",
    description:
      "Masks, neck ties, hats, snoods, shorts, tote bags, school bags",
    tint: "bg-salmon",
    collagePic: maskCollage,
    images: otherWear,
  },
  {
    title: "Workwear",
    description: "Aprons, bodywarmers, jackets, hi-vis jackets",
    tint: "bg-chartreuse",
    collagePic: workWearCollage,
    images: workWear,
  },
  {
    title: "Miscellaneous",
    description: "Water bottles, wallets, umbrellas, slippers, yoga mats",
    tint: "bg-lilac",
    collagePic: miscCollage,
    images: miscArray,
  },
];

export const Route = createFileRoute("/prints")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="mx-auto w-full max-w-sheet px-gutter pb-12">
      <header className="py-8">
        <h1 className="headline misregister ink-flamingo mb-4 text-royal">
          Prints
        </h1>
        <p className="mb-0 max-w-prose text-xl italic">
          Hard to beat prices for every printing occasion. Open a card to see
          more!
        </p>
      </header>
      <div className="flex flex-col gap-4">
        {collagePics.map((collage) => (
          <CollagePic key={collage.title} collage={collage} />
        ))}
      </div>
    </main>
  );
}
