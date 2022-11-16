import FavoritesRepository from '../domain/favorites.repository'
import Favorites from '../domain/favorites.model'

export default class FavoriteUseCase {
  private readonly favoritesRepository: FavoritesRepository

  constructor (favoriteRepository){
    this.favoritesRepository = favoriteRepository
  }

  async addFavoriteProduct (productId: string, userId: string) {
    const newFavoriteProduct = new Favorites(productId, userId) 
    const favoriteProductAdded = await this.favoritesRepository.addFavoriteProduct(newFavoriteProduct)
    return favoriteProductAdded
  }

  async getFavoritesProducts (userId: string) {
    const getListFavoriteProducts = await this.favoritesRepository.getFavoriteProducts(userId)
    return getListFavoriteProducts
  }
}