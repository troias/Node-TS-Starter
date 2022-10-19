"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddProductPage = exports.getProducts = exports.postAddProduct = exports.getAddProduct = void 0;
const product_model_1 = require("../models/product-model");
// console.log("productData", productData)
const getAddProduct = (req, res, next) => {
    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};
exports.getAddProduct = getAddProduct;
const postAddProduct = (req, res, next) => {
    // productData.dummyProductsArray.push({
    //     title: req.body.title,
    //     price: req.body.price
    // })
};
exports.postAddProduct = postAddProduct;
const getProducts = (req, res, next) => {
    res.render("products", {
        products: product_model_1.productData.dummyProductsArray,
        pageTitle: "Products",
        path: "/products",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0 ? true : false,
        activeShop: true,
        productCSS: true
    });
};
exports.getProducts = getProducts;
exports.getAddProductPage = {
    getAddProduct: exports.getAddProduct,
    postAddProduct: exports.postAddProduct,
    getProducts: exports.getProducts,
};
