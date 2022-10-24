import express from "express"

const router = express.Router()

import { Request, Response, NextFunction } from "express"


import { productData } from "../models/product-model"
const adminController = require("../controllers/admin-controller")



router.get(
  "/",
  (Request: Request, Response: Response, NextFunction: NextFunction) => {



    Response.render("shop/index", {
      products: productData.dummyProductsArray,
      pageTitle: "Shop Index page",
      path: "/shop/index",
      hasProducts: productData.dummyProductsArray.length > 0,
      activeShop: true,
      productCSS: true
    })





  }
)

router.get(
  "/shop/products",
  adminController.getAddProductPage.getProducts





)

router.get(
  "/shop/cart",
  (Request: Request, Response: Response, NextFunction: NextFunction) => {
    Response.render("shop/cart", {
      pageTitle: "Your Cart",

    }


    )
  }
)





module.exports = router
