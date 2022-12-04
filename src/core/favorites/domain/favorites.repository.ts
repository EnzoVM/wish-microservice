import Product  from './product.model'
import Favorites from './favorites.model'

export default interface FavoritesRepository {
    
    addFavoriteProduct: (favorites: Favorites) => Promise<Favorites>

    getFavoriteProducts: (userId: string) => Promise<any[]>

}