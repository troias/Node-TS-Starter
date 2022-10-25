import express from "express"

const router = express.Router()


import { getIndexPage, getCart, getProducts } from "../controllers/shop"




router.get(
  "/",
  getIndexPage
)

router.get(
  "/shop/products",
  getProducts





)

router.get(
  "/cart",
  getCart
)





module.exports = router
