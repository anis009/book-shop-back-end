import { Model } from "mongoose";

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
	reviews?: IReview[];
};

export type IBookModel = Model<IBook, Record<string, unknown>>;
