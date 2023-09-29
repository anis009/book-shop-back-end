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
exports.BookServices = exports.createReview = exports.deleteBook = exports.updateBook = exports.getBookById = exports.getLatestAllBooks = exports.getAllBooks = exports.createBook = void 0;
const book_constant_1 = require("./book.constant");
const book_models_1 = __importDefault(require("./book.models"));
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const saveBook = yield book_models_1.default.create(book);
    return saveBook;
});
exports.createBook = createBook;
const getAllBooks = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const andCondition = [];
    if (searchTerm) {
        andCondition.push({
            $or: book_constant_1.bookSearchableFields.map((field) => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i",
                },
            })),
        });
    }
    const whereCondition = andCondition.length > 0 ? { $and: andCondition } : {};
    const books = yield book_models_1.default.find(whereCondition).sort({
        createdAt: -1,
    });
    return books;
});
exports.getAllBooks = getAllBooks;
const getLatestAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_models_1.default.find()
        .sort({
        createdAt: -1,
    })
        .limit(10);
    return books;
});
exports.getLatestAllBooks = getLatestAllBooks;
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield book_models_1.default.findById(id);
    return book;
});
exports.getBookById = getBookById;
const updateBook = (id, updatedBook) => __awaiter(void 0, void 0, void 0, function* () {
    const updated = yield book_models_1.default.findByIdAndUpdate(id, updatedBook, { new: true });
    return updated;
});
exports.updateBook = updateBook;
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleted = yield book_models_1.default.findByIdAndRemove(id);
    return deleted;
});
exports.deleteBook = deleteBook;
const createReview = (id, review) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const book = yield book_models_1.default.findById(id);
    (_a = book === null || book === void 0 ? void 0 : book.reviews) === null || _a === void 0 ? void 0 : _a.unshift(review);
    yield (book === null || book === void 0 ? void 0 : book.save());
    return book;
});
exports.createReview = createReview;
exports.BookServices = {
    createBook: exports.createBook,
    getAllBooks: exports.getAllBooks,
    getBookById: exports.getBookById,
    updateBook: exports.updateBook,
    deleteBook: exports.deleteBook,
    createReview: exports.createReview,
    getLatestAllBooks: exports.getLatestAllBooks,
};
