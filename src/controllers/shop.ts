import { Request, Response, NextFunction } from "express"
import { productData } from "../models/product-model"
import type { Product } from "../models/product-model"



const getIndexPage = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/index", {
        products: productData.dummyProductsArray,
        pageTitle: "Shop Index page",
        path: "/",
        hasProducts: productData.dummyProductsArray.length > 0,

    })
}

const getCart = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/cart", {
        pageTitle: "Your Cart",
        path: "/shop/cart",
        hasProducts: productData.dummyProductsArray.length > 0,
        cart: productData.dummyCartProductsArray

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
    // console.log("reached deleteProduct")
    const productId = req.body.productId
    productData.dummyProductsArray = productData.dummyProductsArray.filter(product => product.id !== productId)
    res.redirect("/shop/products")
}

const addToCart = (req: Request, res: Response, next: NextFunction) => {
    // console.log("reached addToCart")
    const productId = req.body.productId


    const product = productData.dummyProductsArray.find((product: Product) => product._id === productId)

    if (typeof product === "undefined") {
        const productsFromFile = productData.readProductArrFromFile() ? productData.readProductArrFromFile() : productData.dummyProductsArray
        console.log("productsFromFile", productsFromFile)
        productData.dummyCartProductsArray.push(...productsFromFile)
    } else {
        productData.dummyCartProductsArray.push(product)
    }




    console.log("dummyCartProductsArray", productData.dummyCartProductsArray)
    console.log("dummyCartProductsArray", productData.dummyCartProductsArray)


    res.redirect("/shop/products")

}

const getOrders = (req: Request, res: Response, next: NextFunction) => {
    res.render("./shop/orders", {
        pageTitle: "Your Orders",
        path: "/shop/orders",
        hasProducts: productData.dummyProductsArray.length > 0,

    })

}

const getProductDetails = (req: Request, res: Response, next: NextFunction) => {
    // console.log("reached")

    const productId = req.params.productId
    const params = req.params.productId

    // console.log("params", params)
    const product = productData.dummyProductsArray.find(product => product._id === params)
    // console.log("product", product)

    res.render(`./shop/product-details`, {
        product,
        pageTitle: "Product Details",
        path: `/shop/product-details/${+params}`,
        hasProducts: productData.dummyProductsArray.length > 0,

    })
}
console.log("cart", productData.dummyCartProductsArray)





export { getIndexPage, getCart, getProducts, getCheckout, deleteProduct, addToCart, getOrders, getProductDetails }