import express from "express"

const router = express.Router()


import { getIndexPage, getCart, getProducts, getCheckout, deleteProduct } from "../controllers/shop"




router.get(
  "/",
  getIndexPage
)

router.get(
  "/shop/products",
  getProducts
)

router.get(
  "/shop/cart",
  getCart
)

router.get(
  "/shop/checkout",
  getCheckout
)

router.post(
  "/shop/delete-product",
  deleteProduct
)





module.exports = router
