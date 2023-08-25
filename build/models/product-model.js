"use strict";
// import err type for fs
Object.defineProperty(exports, "__esModule", { value: true });
exports.productData = exports.dummyCartProductsArray = exports.dummyProductsArray = void 0;
const fs_1 = require("fs");
const fs = require('fs');
exports.dummyProductsArray = [];
exports.dummyCartProductsArray = [];
const saveProductArrToFile = (productArr) => {
    // console.log("productArr", productArr)
    //example of structire of productArr
    // const productArr = [
    //     {
    //         _id: "123",
    //         title: "test",
    //         price: 123,
    //         imgURL: "test",
    //         description: "test"
    //     }
    // ]
    const productArrString = JSON.stringify(productArr);
    try {
        const writeFileOptions = {
            encoding: "utf-8"
        };
        (0, fs_1.writeFileSync)("productArr.json", productArrString, writeFileOptions);
    }
    catch (err) {
        console.log("err", err);
    }
};
const readProductArrFromFile = () => {
    const productArrString = (0, fs_1.readFileSync)("productArr.json", "utf-8");
    const productArr = JSON.parse(productArrString);
    return productArr;
};
const deleteProductFromArr = (productId) => {
    // console.log("productId", productId)
    const productArr = readProductArrFromFile();
    const productArrWithoutDeletedProduct = productArr.filter((product) => product._id !== productId);
    // console.log
    saveProductArrToFile(productArrWithoutDeletedProduct);
};
console.log("cartArr", exports.dummyCartProductsArray);
exports.productData = {
    dummyProductsArray: exports.dummyProductsArray,
    saveProductArrToFile,
    readProductArrFromFile,
    deleteProductFromArr,
    dummyCartProductsArray: exports.dummyCartProductsArray
};
