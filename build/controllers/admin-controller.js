"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddProductPage = void 0;
const product_model_1 = require("../models/product-model");
// console.log("productData", productData)
const getAddProduct = (req, res, next) => {
    res.render("admin/add-product", {
        pageTitle: "Add Product",
        path: "admin/add-product",
    });
};
const postAddProduct = (req, res, next) => {
    const createIDwithNoDecimals = () => {
        const id = Math.random().toFixed(0).toString();
        return id;
    };
    const imgOrDefalt = req.body.imgUrl ? req.body.imgUrl : "https://via.placeholder.com/150";
    product_model_1.productData.dummyProductsArray.push({
        title: req.body.title,
        price: req.body.price,
        imgURL: imgOrDefalt,
        description: req.body.description,
        _id: createIDwithNoDecimals() // this is a random id
    });
    product_model_1.productData.saveProductArrToFile(product_model_1.productData.dummyProductsArray);
    res.redirect("/admin/products");
};
const getProducts = (req, res, next) => {
    res.render('/admin/products', {
        products: product_model_1.productData.readProductArrFromFile() ? product_model_1.productData.readProductArrFromFile() : (product_model_1.productData.dummyProductsArray ? product_model_1.productData.dummyProductsArray : []),
        pageTitle: "Products",
        path: "/",
        hasProducts: product_model_1.productData.dummyProductsArray.length > 0 ? true : false,
    });
    // console.log("productData.dummyProductsArray", productData.dummyProductsArray)
};
const deleteProduct = (req, res, next) => {
    // console.log("reached deleteProduct")
    try {
        product_model_1.productData.deleteProductFromArr(req.body.productId);
        res.redirect("/admin/products");
    }
    catch (err) {
        console.log("err", err);
    }
};
//get admin products
const getAdminProducts = (req, res, next) => {
    try {
        res.render('admin/product-list', {
            products: product_model_1.productData.readProductArrFromFile() ? product_model_1.productData.readProductArrFromFile() : (product_model_1.productData.dummyProductsArray ? product_model_1.productData.dummyProductsArray : []),
            pageTitle: "Admin Products",
            path: "/",
            hasProducts: product_model_1.productData.dummyProductsArray.length > 0 ? true : false,
        });
    }
    catch (err) {
        console.log("err", err);
    }
};
exports.getAddProductPage = {
    getAddProduct,
    postAddProduct,
    getProducts,
    deleteProduct,
    getAdminProducts
};
