"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const error_page_1 = require("./controllers/error-page");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
//parser
const app = express();
app.set("view engine", "ejs");
// path = nodejs/Node-TS-Starter/src/views
app.set("views", __dirname + "/../src/views");
const viewsRoute = path.join(__dirname, "views");
// console.log("viewsRoute", viewsRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
// admin route
app.use("/admin", adminRoutes);
// shop route
app.use(shopRoutes);
app.use(express.static(path.join(path.join(__dirname, "..", "public"))));
app.use(error_page_1.error);
app.listen(3001);
