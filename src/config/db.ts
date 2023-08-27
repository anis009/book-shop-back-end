import mongoose from "mongoose";
import { Server } from "http";
import "colors";
import config from "./index";
import app from "../app";
let server: Server;

export async function connectDb() {
	try {
		await mongoose.connect(config.mongo_url as string);
		console.log(
			"connection established successfully into database".green.underline
		);
		server = app.listen(config.port, () => {
			console.log(
				`Example app listening on port ${config.port}`.yellow.underline
			);
		});
	} catch (err) {
		console.error(err);
	}

	process.on("unhandledRejection", (error) => {
		// eslint-disable-next-line no-console
		console.log(
			"Unhandled Rejection is detected ,we are closing our server".red.underline
		);
		if (server) {
			server.close(() => {
				console.error(error);
				process.exit(1);
			});
		} else {
			process.exit(1);
		}
	});
}
