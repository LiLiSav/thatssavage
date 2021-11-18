import React from "react";
import ItemCards from "../components/ItemCards";
import IntroCards from "../components/IntroCards";
import PicCarousel from "../components/PicCarousel";

export default function Home() {
	return (
		<>
			<IntroCards />
			<ItemCards />
			<PicCarousel />
		</>
	);
}
