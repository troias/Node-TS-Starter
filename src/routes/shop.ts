import express from "express"

const router = express.Router()


import { getIndexPage, getCart, getProducts, getCheckout, deleteProduct, addToCart, getOrders, getProductDetails } from "../controllers/shop"




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

router.post(
  "/shop/add-to-cart",
  addToCart
)

//orders page 

router.get(
  "/shop/orders",
  getOrders

)

router.post(
  "/shop/products/:productId",

  getProductDetails
)










module.exports = router
