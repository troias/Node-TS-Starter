import express from "express"
const path = require("path")

const rootDir = require("../../lib/utils/path-utils")

const router = express.Router()
import { Request, Response, NextFunction } from "express"


type Products = any[]
const products: Products = [] // dummy data for now


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

    products.push({ title: req.body.title })

    res.redirect("/")
  }
)



module.exports = router
module.exports.products = products
