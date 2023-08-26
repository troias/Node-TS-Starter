const fs = require("fs");
const path = require("path");

const p = __filename;

console.log("p", p);

// module.exports = class CartModel {
//   static addProduct(id: number, productPrice: number) {
//     // Fetch the previous cart
//     fs.readFile(p, (err: any, fileContent: { toString: () => string }) => {
//       let cart = { products: [], totalPrice: 0 };
//       if (!err) {
//         cart = JSON.parse(fileContent.toString());
//       }
//       // Analyze the cart => Find existing product
//       const existingProductIndex =
//         cart.products.findIndex((prod:) => prod.id === id) || 0;

//       const existingProduct = cart.products[existingProductIndex];
//       let updatedProduct;
//       // Add new product/ increase quantity
//       if (existingProduct) {
//         updatedProduct = { ...existingProduct };
//         updatedProduct.qty = updatedProduct.qty + 1;
//         cart.products = [...cart.products];
//         cart.products[existingProductIndex] = updatedProduct;
//       } else {
//         updatedProduct = { id: id, qty: 1 };
//         cart.products = [...cart.products, updatedProduct || []];
//       }
//       cart.totalPrice = cart.totalPrice + +productPrice;
//       fs.writeFile(p, JSON.stringify(cart), (err: any) => {
//         console.log(err);
//       });
//     });
//   }
// };
