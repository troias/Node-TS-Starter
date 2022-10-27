import { Request, Response, NextFunction } from "express"
import { productData } from "../models/product-model"

// console.log("productData", productData)

const getAddProduct = (req: Request, res: Response, next: NextFunction) => {


    res.render("admin/add-product", {
        pageTitle: "Add Product",
        path: "admin/add-product",

    })



}

const postAddProduct = (req: Request, res: Response, next: NextFunction) => {

    const createIDwithNoDecimals = () => {
        const id = Math.random().toFixed(0).toString()
        return id
    }

    productData.dummyProductsArray.push({
        title: req.body.title,
        price: req.body.price,
        imgURL: req.body.imgURL,
        description: req.body.description,
        _id: createIDwithNoDecimals() // this is a random id

    })

    productData.saveProductArrToFile(productData.dummyProductsArray)

    res.redirect("/admin/products")

}

const getProducts = (req: Request, res: Response, next: NextFunction) => {

    res.render('/admin/products', {
        products: productData.readProductArrFromFile() ? productData.readProductArrFromFile() : (productData.dummyProductsArray ? productData.dummyProductsArray : []),
        pageTitle: "Products",
        path: "/",
        hasProducts: productData.dummyProductsArray.length > 0 ? true : false,

    })

    // console.log("productData.dummyProductsArray", productData.dummyProductsArray)

}

const deleteProduct = (req: Request, res: Response, next: NextFunction) => {
    console.log("reached deleteProduct")


    try {
        productData.deleteProductFromArr(req.body.productId)
        res.redirect("/admin/products")
    }
    catch (err) {
        console.log("err", err)
    }





}

//get admin products

const getAdminProducts = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.render('admin/product-list', {
            products: productData.readProductArrFromFile() ? productData.readProductArrFromFile() : (productData.dummyProductsArray ? productData.dummyProductsArray : []),
            pageTitle: "Admin Products",
            path: "/",
            hasProducts: productData.dummyProductsArray.length > 0 ? true : false,

        })
    }
    catch (err) {
        console.log("err", err)
    }

}









export const getAddProductPage = {
    getAddProduct,
    postAddProduct,
    getProducts,
    deleteProduct,
    getAdminProducts

}
