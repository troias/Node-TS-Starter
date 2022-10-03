"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileToDisk = exports.getFile = void 0;
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
exports.getFile = getFile;
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
exports.writeFileToDisk = writeFileToDisk;
(0, exports.writeFileToDisk)("./test.txt", "hello world")
    .then((data) => {
    console.log(data);
})
    .catch((err) => {
    console.log(err);
});
