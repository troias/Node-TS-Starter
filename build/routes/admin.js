"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productsController = require("../controllers/products");
router.get("/add-product", productsController.getAddProductPage.getAddProduct);
router.post("/add-product", productsController.getAddProductPage.postAddProduct);
router.get("/products", productsController.getAddProductPage.getProducts);
module.exports = router;
