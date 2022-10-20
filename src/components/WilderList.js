import React from "react";
import Wilder from "./Wilder";

const wildersData = [
	{
		name: "Ringo",
		city: "London",
		skills: [
			{ title: "JS", votes: 10 },
			{ title: "React", votes: 8 },
		],
	},
	{
		name: "John",
		city: "Paris",
		skills: [
			{ title: "PHP", votes: 9 },
			{ title: "Symfony", votes: 9 },
		],
	},
	{
		name: "George",
		city: "Berlin",
		skills: [
			{ title: "Ruby", votes: 10 },
			{ title: "JS", votes: 8 },
		],
	},
	{
		name: "Paul",
		city: "Reims",
		skills: [
			{ title: "C++", votes: 10 },
			{ title: "Rust", votes: 8 },
		],
	},
];

const WilderList = () => {
	return (
		<>
			{wildersData.map((wilder, index) => (
				<Wilder
        key={index}
        name={wilder.name}
        city={wilder.city}
        skills={wilder.skills.name} />
			))}
		</>
	);
};

export default WilderList;
