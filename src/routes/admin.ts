import express from "express"


const router = express.Router()
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
  productsController.getAddProductPage.getProducts





)

// delete product with id

router.post(
  "/delete-product",
  productsController.getAddProductPage.deleteProduct

)




module.exports = router

