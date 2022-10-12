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


    res.sendFile(path.join(rootDir, "views", "add-product.html"))


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

// router.post(`/product`, (req: Request, res: Response, next: NextFunction) => {
//   console.log(req.body)
//   const order = {
//     title: req.body.title,
//     price: 20,
//   }

//   res.send(JSON.stringify(order))

//   return next()
// })

module.exports = router
module.exports.products = products
