import React from "react";
import styles from "../Card.module.css";
import { ISkillProps } from "../interfaces";

const skills = (props: ISkillProps) => {
	return (
		<>
			<li>
				{props.name}
				<span className={styles.votes}>{props.votes}</span>
			</li>
		</>
	);
};

export default skills;
