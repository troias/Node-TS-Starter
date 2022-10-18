import express from "express"


// const rootDir = require("../../lib/utils/path-utils")

// const path = require("path")

const router = express.Router()

import { Request, Response, NextFunction } from "express"
// import { dummyProductsArray } from "../controllers/products"

import { productData } from "../models/product-model"



router.get(
  "/",
  (Request: Request, Response: Response, NextFunction: NextFunction) => {

    console.log("admin", productData.dummyProductsArray)

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
