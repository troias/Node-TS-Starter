import express from "express"

const router = express.Router()

import { Request, Response, NextFunction } from "express"


import { productData } from "../models/product-model"



router.get(
  "/",
  (Request: Request, Response: Response, NextFunction: NextFunction) => {



    Response.render("shop", {
      prods: productData.dummyProductsArray,
      pageTitle: "Shop",
      path: "/",
      hasProducts: productData.dummyProductsArray.length > 0,
      activeShop: true,
      productCSS: true
    })





  }
)





module.exports = router
