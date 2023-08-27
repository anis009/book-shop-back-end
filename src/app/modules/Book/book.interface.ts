export type IReview = {
	email: string;
	text: string;
	username: string;
};

export type IBook = {
	title: string;
	author: string;
	genre: string;
	publicationDate: string;
	reviews: IReview[];
};
