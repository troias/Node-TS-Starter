import express from "express"


const router = express.Router()

import { Request, Response, NextFunction } from "express"



type Products = {
  title: string | undefined
  price: number | undefined
}[] | []


const product = [] as Products
const dummyProductsArray = [
  {
    title: "Book",
    price: 12.99
  },
  {
    title: "Book 2",
    price: 12.99
  }
] as Products




router.get(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {


    res.render("add-product", {
      pageTitle: "Add Product",
      path: "/admin/add-product",
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    })


  }

)

router.post(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {

    console.log("req.body", req.body)

    // product.push({ title: req.body.title, price: req.body.price }) // this is the array of products that we are pushing to

    // dummy data for now

    res.redirect("/")
  }
)

router.get(
  "/products",
  (req: Request, res: Response, next: NextFunction) => {


    res.render("products", {
      products: dummyProductsArray,
      pageTitle: "Products",
      path: "/products",
      hasProducts: dummyProductsArray.length > 0,
      activeShop: true,
      productCSS: true
    })
  }

)



module.exports = router
module.exports.products = dummyProductsArray
