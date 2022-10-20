import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IWilder } from "./interfaces";
import Wilder from "./components/Wilder";
import AddWilder from "./components/AddWilder";

function App() {
	const [wilders, setWilders] = useState<IWilder[]>([]);

	// My API -> give me the list of wilders
	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			const result = (await axios.get("http://localhost:5000/api/wilders")).data as IWilder[];
			setWilders(result);
			console.log(result);
		};
		fetchData();
	}, []);

	const fetch = async () => {
		const result = await axios.get("http://localhost:5000/api/wilders");
		//process result.data
		setWilders(result.data);
	};

	return (
		<div>
			<header>
				<div className="container">
					<h1>Wilders Book</h1>
				</div>
			</header>
			<main className="container">
				<h2>Wilders</h2>
				<section className="card-row">
					{wilders.map((wilder) => (
						<Wilder key={wilder.id} name={wilder.name} upvotes={wilder.upvotes} isDeletable="true" />
					))}
				</section>
				<h2>Add a Wilder</h2>
				<AddWilder onWilderCreated={() => fetch()} />
				{/* pour passer une fonction a
         l'enfant, on appellera onWilderCreated qui executera un fetc
         on pourra ajouter un loader par exemple*/}
			</main>
			<footer>
				<div className="container">
					<p>&copy; 2022 Wild Code School</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
