"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const shop_1 = require("../controllers/shop");
router.get("/", shop_1.getIndexPage);
router.get("/shop/products", shop_1.getProducts);
router.get("/shop/cart", shop_1.getCart);
router.get("/shop/checkout", shop_1.getCheckout);
router.post("/shop/delete-product", shop_1.deleteProduct);
router.post("/shop/add-to-cart", shop_1.addToCart);
//orders page 
router.get("/shop/orders", shop_1.getOrders);
router.post("/shop/products/:productId", shop_1.getProductDetails);
module.exports = router;
