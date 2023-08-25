"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const AdminController = require("../controllers/admin-controller");
router.get("/add-product", AdminController.getAddProductPage.getAddProduct);
router.post("/add-product", AdminController.getAddProductPage.postAddProduct);
//admin products
router.get("/products", AdminController.getAddProductPage.getAdminProducts);
// delete product with id
router.post("/delete-product", AdminController.getAddProductPage.deleteProduct);
module.exports = router;
