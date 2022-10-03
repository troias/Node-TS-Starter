const express = require("express")
const http = require("http")
const cors = require("cors")
const fs = require("fs")
const path = require("path")

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

app.use(express.static(__dirname))

app.get(
  "/",
  (req: req, res: res) => {
    switch (req.method) {
      case "GET":
        break

      case "POST":
        res.send("troias")
        break
      default:
        res.send("Hello World!")
        break
    }
  },

  (err: err) => {
    console.log(err)
  }
)

app.get("/message", (req: req, res: res) => {
  switch (req.method) {
    case "GET":
      break
    case "POST":
      res.on("data", (chunk: any) => {})

      break
    default:
      break
  }
  res.end()
})

app.post(
  "/",
  (req: req, res: res) => {
    res.send(JSON.stringify({ message: "troias" }))
  },
  (err: err) => {
    console.log(err)
  }
)

app.get(
  "/message",
  (req: req, res: res) => {
    res.send(JSON.stringify({ message: "troias" }))
  },
  (err: err) => {
    console.log(err)
  }
)

const server = http.createServer(app)

server.listen(
  3001,
  () => {
    console.log("server is running")
  },
  (err: err) => {
    console.log(err)
  }
)
