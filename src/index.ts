const express = require("express")

import { error } from "./controllers/error-page"



const path = require("path")



const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")


//parser

const app = express()

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")





app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes    

app.use("/admin", adminRoutes)
app.use(shopRoutes)




app.use(express.static(

    path.join(path.join(__dirname, "..", "public"))


))

app.use(error)

app.listen(3001)
