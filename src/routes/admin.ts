import express from "express"
const path = require("path")

const rootDir = require("../../lib/utils/path-utils")

const router = express.Router()
import { Request, Response, NextFunction } from "express"

router.get(
  "/add-product",
  (req: Request, res: Response, next: NextFunction) => {
    res.sendFile(path.join(rootDir, "views", "add-product.html"))


  }
)

router.post(`/product`, (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  const order = {
    title: req.body.title,
    price: 20,
  }

  res.send(JSON.stringify(order))

  return next()
})

module.exports = router
