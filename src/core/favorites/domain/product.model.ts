import { v4 as uuid } from 'uuid'
import IProduct from './product.interface'
import { IProductImage } from './product.interface'

export default class Product implements IProduct {
  productId: string
  productName: string
  categoryName: string
  color: string
  price: number
  description: string
  primaryImg: string
  productImages?: IProductImage[]

  constructor (productName: string, categoryName: string, color: string, price: number, description: string, primaryImg: string, urls: string[]) {
    this.productId = uuid()
    this.productName = productName
    this.categoryName = categoryName
    this.color = color
    this.price = price
    this.description = description
    this.primaryImg = primaryImg
    this.productImages = [{
      productImageId: uuid(),
      url: urls[0]
    },
    {
      productImageId: uuid(),
      url: urls[1]
    },
    {
      productImageId: uuid(),
      url: urls[2]
    }
    ]
  }
}