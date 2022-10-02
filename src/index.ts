const express = require("express")
const http = require("http")
const cors = require("cors")

const app = express()

type req = {
  url: string
  method: string
}
type err = {
  message: string
}

type res = {
  [x: string]: any
  statusCode: number
  statusMessage: string
  headers: object
  body: string
  send(body: string): void
}

app.use(
  cors({
    origin: "http://localhost:1234",
  })
)

app.get(
  "/",
  (req: req, res: res) => {
    res.send(JSON.stringify({ message: "hello" }))
  },
  (err: err) => {
    console.log(err)
  }
)

const server = http.createServer(app)

server.listen(
  3000,
  () => {
    console.log("server is running")
  },
  (err: err) => {
    console.log(err)
  }
)
