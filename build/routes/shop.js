"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const product_model_1 = require("../models/product-model");
router.get("/", (Request, Response, NextFunction) => {
    Response.render("shop", {
        prods: product_model_1.productData.dummyProductsArray,
        pageTitle: "Shop",
        path: "/",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0,
        activeShop: true,
        productCSS: true
    });
});
module.exports = router;
