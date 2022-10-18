const express = require("express")
import { Request, Response } from "express"
import { error } from "./controllers/error-page"

const rootDir = require("../lib/utils/path-utils")

const path = require("path")


type Next = (err?: any) => void

// const router = express.Router()


// console.log("rootDir", rootDir)

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")





//parser

const app = express()

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

console.log("__dirname", path.join(__dirname, "..", "public"))

console.log("rootDir",)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/admin", adminRoutes)
app.use(shopRoutes)
app.use(express.static(

    path.join(path.join(__dirname, "..", "public"))


))

app.use(error)

app.listen(3001)
