import React from "react";
import blank_profile from "../assets/profil.png";
import Skills from "./Skill";
import styles from "../Card.module.css";
import axios from "axios";
import { IWilderProps } from "../interfaces";

const Wilder = ({ name, upvotes, isDeletable }: IWilderProps): JSX.Element => {
	return (
		<>
			<article className={styles.card}>
				<img src={blank_profile} alt={`${name} Profile`} />
				<h3>{name}</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.
				</p>
				<h4>Wild Skills</h4>
				<ul className={styles.skills}>
					{upvotes.map((upvote) => (
						<Skills key={upvote.id} name={upvote.skill.name} votes={upvote.upvote} />
					))}
				</ul>
				{isDeletable ? (
					<form
						onSubmit={(e) => {
							e.preventDefault();
							axios.delete("http://localhost:5000/api/wilders/{key}");
							console.log("deleted");
						}}
					>
						<button type="submit">Delete</button>
					</form>
				) : null}
			</article>
		</>
	);
};
export default Wilder;
