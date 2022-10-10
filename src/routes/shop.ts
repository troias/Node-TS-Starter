import express from "express"

const rootDir = require("../../lib/utils/path-utils")

const path = require("path")

const router = express.Router()
import { Request, Response, NextFunction } from "express"

router.get(
  "/",
  (Request: Request, Response: Response, NextFunction: NextFunction) => {

    Response.sendFile(path.join(rootDir, "views", "shop.html"))


  }
)





module.exports = router
