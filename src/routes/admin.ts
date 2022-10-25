import express from "express"


const router = express.Router()
const AdminController = require("../controllers/admin-controller")






router.get(
  "/add-product",
  AdminController.getAddProductPage.getAddProduct
)

router.post(
  "/add-product",
  AdminController.getAddProductPage.postAddProduct

)



//admin products

router.get(
  "/products",
  AdminController.getAddProductPage.getAdminProducts

)


// delete product with id

router.post(
  "/delete-product",
  AdminController.getAddProductPage.deleteProduct

)




module.exports = router

