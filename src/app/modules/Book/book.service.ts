import { IBook, IReview } from "./book.interface";
import Book from "./book.models";

export const createBook = async (book: IBook) => {
	const saveBook = await Book.create(book);
	return saveBook;
};

export const getAllBooks = async () => {
	const books = await Book.find();
	return books;
};

export const getBookById = async (id: string) => {
	const book = await Book.findById(id);
	return book;
};

export const updateBook = async (id: string, updatedBook: IBook) => {
	const updated = await Book.findByIdAndUpdate(id, updatedBook, { new: true });
	return updated;
};

export const deleteBook = async (id: string) => {
	const deleted = await Book.findByIdAndRemove(id);
	return deleted;
};

export const createReview = async (id: string, review: IReview) => {
	const book = await Book.findById(id);
	book?.reviews?.unshift(review);
	await book?.save();
	return book;
};

export const BookServices = {
	createBook,
	getAllBooks,
	getBookById,
	updateBook,
	deleteBook,
	createReview,
};
