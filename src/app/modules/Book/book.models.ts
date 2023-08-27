import { Schema, model } from "mongoose";
import { IBook, IBookModel, IReview } from "./book.interface";

const ReviewSchema = new Schema<IReview>({
	email: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
});

const BookSchema = new Schema<IBook, IBookModel>({
	author: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		required: true,
	},
	publicationDate: {
		type: String,
		required: true,
	},
	reviews: [ReviewSchema],
});

const Book = model<IBook, IBookModel>("Book", BookSchema);
export default Book;
