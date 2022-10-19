
// import err type for fs

import { readFileSync, writeFileSync } from "fs"

const fs = require('fs')

interface Product {
    title: string,
    price: number,
    _id: string
}

type Products = Product[] | any[]




export const dummyProductsArray = [

] as Products



const saveProductArrToFile = (productArr: Products) => {

    const productArrString = JSON.stringify(productArr)


    try {
        const writeFileOptions = {
            encoding: "utf-8"
        } as const


        writeFileSync("productArr.json", productArrString, writeFileOptions)
    }
    catch (err) {
        console.log("err", err)
    }


}

const readProductArrFromFile = () => {

    const productArrString = readFileSync("productArr.json", "utf-8")

    const productArr = JSON.parse(productArrString)

    return productArr

}

const deleteProductFromArr = (productId: string) => {

    console.log("productId", productId)

    const productArr = readProductArrFromFile()

    const productArrWithoutDeletedProduct = productArr.filter((product: Product) => product._id !== productId)
    console.log
    saveProductArrToFile(productArrWithoutDeletedProduct)

}


export const productData = {
    dummyProductsArray,
    saveProductArrToFile,
    readProductArrFromFile,
    deleteProductFromArr
}
