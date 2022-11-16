import { v4 as uuid } from 'uuid'
import IFavorites from './favorites.interface'

export default class Favorites implements IFavorites {
  wishId: string
  productId: string
  userId: string

  constructor (productId: string, userId:string) {
    this.wishId = uuid()
    this.productId = productId
    this.userId = userId
  }
}