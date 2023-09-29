"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const book_route_1 = require("./app/modules/Book/book.route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
if (config_1.default.node_env === "development")
    app.use((0, morgan_1.default)("dev"));
app.use("/api/v1/books", book_route_1.bookRouter);
app.get("/", (req, res) => {
    res.send("welcome");
});
exports.default = app;
