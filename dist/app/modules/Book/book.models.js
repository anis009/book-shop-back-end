"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ReviewSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: false,
    },
    review: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: false,
    },
}, {
    timestamps: true,
});
const BookSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
const Book = (0, mongoose_1.model)("Book", BookSchema);
exports.default = Book;
