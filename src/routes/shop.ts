import express from "express"


const rootDir = require("../../lib/utils/path-utils")

const path = require("path")

const router = express.Router()
import { Request, Response, NextFunction } from "express"

const adminData = require("./admin")




router.get(
  "/",
  (Request: Request, Response: Response, NextFunction: NextFunction) => {

    // console.log("admin", adminData.products)

    Response.render("shop", {
      prods: adminData.products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: adminData.products.length > 0,
      activeShop: true,
      productCSS: true
    })



  }
)





module.exports = router
