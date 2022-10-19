"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const error_page_1 = require("./controllers/error-page");
// const rootDir = require("../lib/utils/path-utils")
const path = require("path");
// const router = express.Router()
// console.log("rootDir", rootDir)
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//parser
const app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
// console.log("__dirname", path.join(__dirname, "..", "public"))
console.log("rootDir");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(express.static(path.join(path.join(__dirname, "..", "public"))));
app.use(error_page_1.error);
app.listen(3001);
