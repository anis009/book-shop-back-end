import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import { bookRouter } from "./app/modules/Book/book.route";
const app = express();

app.use(express.json());
app.use(cors());
if (config.node_env === "development") app.use(morgan("dev"));
app.use("/api/v1/books", bookRouter);
app.get("/", (req: Request, res: Response) => {
	res.send("welcome");
});

export default app;
