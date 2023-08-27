import { Request, Response } from "express";
import { BookServices } from "./book.service";
import catchAsync from "../../../shared/catchAsync";

export const createBook = catchAsync(async (req: Request, res: Response) => {
	const result = await BookServices.createBook(req.body);
	res.json({
		success: true,
		message: "Book created successfully",
		data: result,
	});
});

export const getAllBooks = catchAsync(async (req: Request, res: Response) => {
	const books = await BookServices.getAllBooks();
	res.json({
		success: true,
		data: books,
	});
});

export const getBookById = catchAsync(async (req: Request, res: Response) => {
	const book = await BookServices.getBookById(req.params.id);
	if (!book) {
		res.status(404).json({
			success: false,
			message: "Book not found",
		});
	} else {
		res.json({
			success: true,
			data: book,
		});
	}
});

export const updateBook = catchAsync(async (req: Request, res: Response) => {
	const result = await BookServices.updateBook(req.params.id, req.body);
	res.json({
		success: true,
		message: "Book updated successfully",
		data: result,
	});
});

export const deleteBook = catchAsync(async (req: Request, res: Response) => {
	const result = await BookServices.deleteBook(req.params.id);
	res.json({
		success: true,
		message: "Book deleted successfully",
		data: result,
	});
});

export const createReview = catchAsync(async (req: Request, res: Response) => {
	const result = await BookServices.createReview(req.params.id, req.body);
	res.json({
		success: true,
		message: "Create Review successfully",
		data: result,
	});
});

export const BookController = {
	createBook,
	getAllBooks,
	getBookById,
	updateBook,
	deleteBook,
	createReview,
};
