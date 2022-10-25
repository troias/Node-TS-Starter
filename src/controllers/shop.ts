import { Request, Response, NextFunction } from "express"
import { productData } from "../models/product-model"



const getIndexPage = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/index", {
        products: productData.dummyProductsArray,
        pageTitle: "Shop Index page",
        path: "/",
        hasProducts: productData.dummyProductsArray.length > 0,
        activeShop: true,
        productCSS: true
    })
}

const getCart = (req: Request, res: Response, next: NextFunction) => {
    res.render("/cart", {
        pageTitle: "Your Cart",
        path: "/shop/cart",
        hasProducts: productData.dummyProductsArray.length > 0,
        activeShop: true,
        productCSS: true
    })
}

const getProducts = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/product-list", {
        products: productData.dummyProductsArray,
        pageTitle: "Products",
        path: "/shop/products",
        hasProducts: productData.dummyProductsArray.length > 0,
        activeShop: true,
        productCSS: true
    })
}


export { getIndexPage, getCart, getProducts }