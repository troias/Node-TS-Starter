
// import err type for fs

import { readFileSync, writeFileSync } from "fs"

const fs = require('fs')

export interface Product {
    _id: string
    title: string,
    price: number,
    imgURL: string,
    description: string,
}

type Products = Product[] | any[]




export const dummyProductsArray = [

] as Products

export const dummyCartProductsArray = [
] as Products



const saveProductArrToFile = (productArr: Products) => {
    // console.log("productArr", productArr)

    //example of structire of productArr
    // const productArr = [
    //     {
    //         _id: "123",
    //         title: "test",
    //         price: 123,
    //         imgURL: "test",
    //         description: "test"
    //     }
    // ]





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

    // console.log("productId", productId)

    const productArr = readProductArrFromFile()

    const productArrWithoutDeletedProduct = productArr.filter((product: Product) => product._id !== productId)
    // console.log
    saveProductArrToFile(productArrWithoutDeletedProduct)

}

console.log("cartArr", dummyCartProductsArray)

export const productData = {
    dummyProductsArray,
    saveProductArrToFile,
    readProductArrFromFile,
    deleteProductFromArr,
    dummyCartProductsArray
}
