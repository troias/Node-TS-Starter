"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductDetails = exports.getOrders = exports.addToCart = exports.deleteProduct = exports.getCheckout = exports.getProducts = exports.getCart = exports.getIndexPage = void 0;
const product_model_1 = require("../models/product-model");
const getIndexPage = (req, res, next) => {
    res.render("./shop/index", {
        products: product_model_1.productData.dummyProductsArray,
        pageTitle: "Shop Index page",
        path: "/",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0,
    });
};
exports.getIndexPage = getIndexPage;
const getCart = (req, res, next) => {
    res.render("./shop/cart", {
        pageTitle: "Your Cart",
        path: "/shop/cart",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0,
        cart: product_model_1.productData.dummyCartProductsArray
    });
};
exports.getCart = getCart;
const getProducts = (req, res, next) => {
    res.render("./shop/product-list", {
        products: product_model_1.productData.dummyProductsArray.length > 0 ? product_model_1.productData.dummyProductsArray : [],
        pageTitle: "Products",
        path: "/shop/products",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0,
    });
};
exports.getProducts = getProducts;
const getCheckout = (req, res, next) => {
    res.render("./shop/checkout", {
        pageTitle: "Checkout",
        path: "/shop/checkout",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0,
    });
};
exports.getCheckout = getCheckout;
const deleteProduct = (req, res, next) => {
    // console.log("reached deleteProduct")
    const productId = req.body.productId;
    product_model_1.productData.dummyProductsArray = product_model_1.productData.dummyProductsArray.filter(product => product.id !== productId);
    res.redirect("/shop/products");
};
exports.deleteProduct = deleteProduct;
const addToCart = (req, res, next) => {
    // console.log("reached addToCart")
    const productId = req.body.productId;
    const product = product_model_1.productData.dummyProductsArray.find((product) => product._id === productId);
    if (typeof product === "undefined") {
        const productsFromFile = product_model_1.productData.readProductArrFromFile() ? product_model_1.productData.readProductArrFromFile() : product_model_1.productData.dummyProductsArray;
        console.log("productsFromFile", productsFromFile);
        product_model_1.productData.dummyCartProductsArray.push(...productsFromFile);
    }
    else {
        product_model_1.productData.dummyCartProductsArray.push(product);
    }
    console.log("dummyCartProductsArray", product_model_1.productData.dummyCartProductsArray);
    console.log("dummyCartProductsArray", product_model_1.productData.dummyCartProductsArray);
    res.redirect("/shop/products");
};
exports.addToCart = addToCart;
const getOrders = (req, res, next) => {
    res.render("./shop/orders", {
        pageTitle: "Your Orders",
        path: "/shop/orders",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0,
    });
};
exports.getOrders = getOrders;
const getProductDetails = (req, res, next) => {
    // console.log("reached")
    const productId = req.params.productId;
    const params = req.params.productId;
    // console.log("params", params)
    const product = product_model_1.productData.dummyProductsArray.find(product => product._id === params);
    // console.log("product", product)
    res.render(`./shop/product-details`, {
        product,
        pageTitle: "Product Details",
        path: `/shop/product-details/${+params}`,
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0,
    });
};
exports.getProductDetails = getProductDetails;
console.log("cart", product_model_1.productData.dummyCartProductsArray);
