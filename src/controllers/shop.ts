import { Request, Response, NextFunction } from "express"
import { productData } from "../models/product-model"



const getIndexPage = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/index", {
        products: productData.dummyProductsArray,
        pageTitle: "Shop Index page",
        path: "/",
        hasProducts: productData.dummyProductsArray.length > 0,

    })
}

const getCart = (req: Request, res: Response, next: NextFunction) => {
    res.render("/cart", {
        pageTitle: "Your Cart",
        path: "/shop/cart",
        hasProducts: productData.dummyProductsArray.length > 0,

    })
}

const getProducts = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/product-list", {
        products: productData.dummyProductsArray.length > 0 ? productData.dummyProductsArray : [],
        pageTitle: "Products",
        path: "/shop/products",
        hasProducts: productData.dummyProductsArray.length > 0,

    })
}

const getCheckout = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/checkout", {
        pageTitle: "Checkout",
        path: "/shop/checkout",
        hasProducts: productData.dummyProductsArray.length > 0,

    })
}

const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log("reached deleteProduct")
    const productId = req.body.productId
    productData.dummyProductsArray = productData.dummyProductsArray.filter(product => product.id !== productId)
    res.redirect("/shop/products")
}



export { getIndexPage, getCart, getProducts, getCheckout, deleteProduct }