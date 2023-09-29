"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = exports.createReview = exports.deleteBook = exports.updateBook = exports.getBookById = exports.getLatestAllBooks = exports.getAllBooks = exports.createBook = void 0;
const book_service_1 = require("./book.service");
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
exports.createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.createBook(req.body);
    res.json({
        success: true,
        message: "Book created successfully",
        data: result,
    });
}));
exports.getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    let searchTerm = null;
    if ((_a = req.query) === null || _a === void 0 ? void 0 : _a.searchTerm) {
        searchTerm = (_b = req.query) === null || _b === void 0 ? void 0 : _b.searchTerm;
    }
    const books = yield book_service_1.BookServices.getAllBooks(searchTerm);
    res.json({
        success: true,
        data: books,
    });
}));
exports.getLatestAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_service_1.BookServices.getLatestAllBooks();
    res.json({
        success: true,
        data: books,
    });
}));
exports.getBookById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_service_1.BookServices.getBookById(req.params.id);
    if (!book) {
        res.status(404).json({
            success: false,
            message: "Book not found",
        });
    }
    else {
        res.json({
            success: true,
            data: book,
        });
    }
}));
exports.updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.updateBook(req.params.id, req.body);
    res.json({
        success: true,
        message: "Book updated successfully",
        data: result,
    });
}));
exports.deleteBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.deleteBook(req.params.id);
    res.json({
        success: true,
        message: "Book deleted successfully",
        data: result,
    });
}));
exports.createReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.BookServices.createReview(req.params.id, req.body);
    res.json({
        success: true,
        message: "Create Review successfully",
        data: result,
    });
}));
exports.BookController = {
    createBook: exports.createBook,
    getAllBooks: exports.getAllBooks,
    getBookById: exports.getBookById,
    updateBook: exports.updateBook,
    deleteBook: exports.deleteBook,
    createReview: exports.createReview,
    getLatestAllBooks: exports.getLatestAllBooks,
};
