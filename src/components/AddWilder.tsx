/* import axios from "axios";
import React, { useState } from "react";
import { IWilderProps } from "../interfaces";
import { IWilderForm } from "../interfaces";

interface IProps {
	onWilderCreated: () => void;
	//onWilderCreated: Function; cheatcode prefere au dessus
}

const AddWilder = (props: IProps) => {
	const [name, setName] = useState<IWilderProps["name"]>("");
	const [city, setCity] = useState<IWilderProps["city"]>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
		e.preventDefault();
		const wilder: IWilderForm = {
			name,
		};
		await axios.post("http://localhost:5000/api/wilders", wilder);
		props.onWilderCreated();
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
			<input type="text" placeholder="city" value={city} onChange={(e) => setCity(e.target.value)} />

			<button type="submit">Add</button>
		</form>
	);
};

export default AddWilder; */

import axios from "axios";
import { IWilderProps } from "../interfaces";
import { IWilderForm } from "../interfaces";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IProps {
	onWilderCreated: () => void;
	//onWilderCreated: Function; cheatcode prefere au dessus
}

export default function AddWilder(props: IProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IWilderForm>();
	const onSubmit = async (data: any) => {
		console.log(data);
		await axios.post("http://localhost:5000/api/wilders", data);
		props.onWilderCreated();
	};
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Last name" {...register("name", { required: true, maxLength: 100 })} />
			<input type="text" placeholder="City" {...register("city", {})} />

			<input type="submit" />
		</form>
	);
}
