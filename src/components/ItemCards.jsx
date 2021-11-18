/* eslint-disable prefer-template */
import React from "react";
import "../css/CardOptions.css";
import CardOptions from "./CardOptions";
import itemCards from "../assets/itemcards.json";

export default function ItemCards() {
	return (
		<div className="page-container">
			<div className="container">
				<h1>Check out what we can do!</h1>
			</div>

			<ul className="cards-container">
				{itemCards.map((item) => (
					<CardOptions
						key={item.front}
						src={"/images/" + item.front}
						srcb={"/images/" + item.back}
						listText={item.listText}
						label={item.label}
						alt={item.alt}
						color={item.color}
						bgColour={item.bgColour}
					/>
				))}
			</ul>
		</div>
	);
}
