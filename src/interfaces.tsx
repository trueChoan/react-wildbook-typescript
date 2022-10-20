export interface IWilder {
	id: number;
	name: string;
	upvotes: IVoteProps[];
	city?: string;
	isdeletable?: string;
}

export interface IWilderProps {
	name: string;
	city?: string;
	isDeletable?: string;
	upvotes: IVoteProps[];
}

export interface ISkillProps {
	name: string;
	votes: number;
}

export interface IVoteProps {
	id: number;
	skill: ISkillProps;
	upvote: number;
}

export interface IWilderForm {
	name: string;
	city?: string;
}
