import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import Favorites from '../../domain/favorites.model'
import FavoritesRepository from '../../domain/favorites.repository'

const prisma = new PrismaClient()

export default class FavoritesPrismaRepository implements FavoritesRepository {

  async addFavoriteProduct (favorites: Favorites): Promise<Favorites> {
    const newFavoriteProduct = await prisma.wish.create({
      data: {
        wishId: favorites.wishId,
        productId: favorites.productId,
        userId: favorites.userId
      }
    })
    return newFavoriteProduct
  }

  async getFavoriteProducts (userId: string) {
    const getListWishProducts = await prisma.wish.findMany({
      where:{
        userId,
      }
    })
    return getListWishProducts
  }

  async getProductById (productId: string) {
    const response = await axios.get(`https://product-microservice-production.up.railway.app/api/v1/products/oneproduct/${productId}`)
    return response.data.data
  }

  async verifyWishProduct (userId: string, productId: string) {
    const getListVerifyWishProducts = await prisma.wish.findMany({
      where:{
        userId,
        productId
      }
    })
    return getListVerifyWishProducts[0]
  }

  async deleteWishProduct (wishId: string) {
    const wishProductDelete = await prisma.wish.delete({
      where:{
        wishId
      }
    })
    return wishProductDelete
  }
} 