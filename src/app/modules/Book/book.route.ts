import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.post("/", BookController.createBook);
router.get("/", BookController.getAllBooks);
router.put("/reviews/:id", BookController.createReview);
router.get("/:id", BookController.getBookById);
router.put("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

export const bookRouter = router;
