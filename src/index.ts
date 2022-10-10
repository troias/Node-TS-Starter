const express = require("express")
import { Request, Response } from "express"

const rootDir = require("../lib/utils/path-utils")

const path = require("path")


type Next = (err?: any) => void

// const router = express.Router()


console.log("rootDir", rootDir)

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")




//parser

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/admin", adminRoutes)
app.use(shopRoutes)
app.use(express.static(

    path.join(rootDir)


))

app.use((req: Request, res: Response, next: Next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404.html"))
})

app.listen(3001)
