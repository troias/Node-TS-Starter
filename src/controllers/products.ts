import { Request, Response, NextFunction } from "express"

type Products = {
    title: string | undefined
    price: number | undefined
}[] | any[]


// const product = [] as Products

export const dummyProductsArray = [
    {
        title: "Book",
        price: 12.99
    },
    {
        title: "Book 2",
        price: 12.99
    }
] as Products

export const getAddProduct = (req: Request, res: Response, next: NextFunction) => {


    res.render("add-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    })

    res.redirect("/")
}

export const postAddProduct = (req: Request, res: Response, next: NextFunction) => {
    dummyProductsArray.push({
        title: req.body.title,
        price: req.body.price

    })
    res.redirect("/")
}

export const getProducts = (req: Request, res: Response, next: NextFunction) => {

    res.render("products", {
        products: dummyProductsArray,
        pageTitle: "Products",
        path: "/products",
        hasProducts: dummyProductsArray.length > 0 ? true : false,
        activeShop: true,
        productCSS: true
    })
}


export const getAddProductPage = {
    getAddProduct,
    postAddProduct,
    getProducts,
    dummyProductsArray
}
