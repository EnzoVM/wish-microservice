import FavoritesRepository from '../domain/favorites.repository'
import Favorites from '../domain/favorites.model'

export default class FavoriteUseCase {
  private readonly favoritesRepository: FavoritesRepository

  constructor (favoriteRepository){
    this.favoritesRepository = favoriteRepository
  }

  async addFavoriteProduct (productId: string, userId: string) {
    const response = await this.favoritesRepository.verifyWishProduct(userId, productId)
    if(response){
      throw new Error('El producto ya esta en favoritos')
    }
    const newFavoriteProduct = new Favorites(productId, userId) 
    const favoriteProductAdded = await this.favoritesRepository.addFavoriteProduct(newFavoriteProduct)
    return favoriteProductAdded
  }

  async getFavoritesProducts (userId: string) {
    const getListFavoriteProducts = await this.favoritesRepository.getFavoriteProducts(userId)
    const wishProduct = getListFavoriteProducts.map(async wishProducts => {
      const product = await this.favoritesRepository.getProductById(wishProducts.productId)
      return {...product, wishId: wishProducts.wishId}
    })
    return await Promise.all(wishProduct)
  }

  async deleteWishProduct (wishId: string) {
    const wishProductDelete = await this.favoritesRepository.deleteWishProduct(wishId)
    return wishProductDelete
  }
}