import { Request, Response, NextFunction } from "express"
import { productData } from "../models/product-model"

// console.log("productData", productData)

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {


    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })



}

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    // productData.dummyProductsArray.push({
    //     title: req.body.title,
    //     price: req.body.price

    // })

}

export const getProducts = (req: Request, res: Response, next: NextFunction) => {

    res.render("products", {
        products: productData.dummyProductsArray,
        pageTitle: "Products",
        path: "/products",
        hasProducts: productData.dummyProductsArray.length > 0 ? true : false,
        activeShop: true,
        productCSS: true
    })

}


export const getAddProductPage = {
    getAddProduct,
    postAddProduct,
    getProducts,

}
