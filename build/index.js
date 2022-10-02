"use strict";
const fs = require("fs");
const getFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};
// getFile("./package.json")
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
const writeFileToDisk = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve("success");
        });
    });
};
writeFileToDisk("./test.txt", "hello world")
    .then((data) => {
    console.log(data);
})
    .catch((err) => {
    console.log(err);
});
