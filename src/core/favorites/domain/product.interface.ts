export type IProductImage = {
    productImageId: string
    url: string  
}

export default interface IProduct {
    productId: string,
    productName: string,
    categoryName: string,
    color: string,
    price: number,
    description: string,
    productImages?: IProductImage[]
}