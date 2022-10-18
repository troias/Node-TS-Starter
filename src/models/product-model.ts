type Products = {
    title: string | undefined
    price: number | undefined
}[] | any[]


// const product = [] as Products

export const dummyProductsArray = [
    {
        title: "Book",
        price: 12.99
    },
    {
        title: "Book 2",
        price: 12.99
    }
] as Products

export const productData = {
    dummyProductsArray
}