import express from "express"


const router = express.Router()

import { Request, Response, NextFunction } from "express"

const productsController = require("../controllers/products")






router.get(
  "/add-product",
  productsController.getAddProductPage.getAddProduct

)

router.post(
  "/add-product",
  productsController.getAddProductPage.postAddProduct

)

router.get(
  "/products",
  (req: Request, res: Response, next: NextFunction) => {

    productsController.getAddProductPage.getProducts(req, res, next)

  }

)



module.exports = router

