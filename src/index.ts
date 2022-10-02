const fs = require("fs")

type err = {
  message: string
}

type returnFileData = {
  data: string
  error: err
}

const getFile = (path: string) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err: string, data: string) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

const writeFileToDisk = (path: string, data: string) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err: string) => {
      if (err) {
        reject(err)
      }
      resolve("success")
    })
  })
}

writeFileToDisk("./test.txt", "hello world")
  .then((data) => {
    console.log(data)
  })

  .catch((err) => {
    console.log(err)
  })
