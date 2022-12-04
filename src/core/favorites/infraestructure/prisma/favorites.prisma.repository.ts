import { PrismaClient, Product } from '@prisma/client'
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
    
    getListWishProducts.map(async wishProducts => {
      const products = await prisma.product.findMany({
        where:{
          productId: wishProducts.productId
        }
      })
    })

    return getListWishProducts
  }
} 