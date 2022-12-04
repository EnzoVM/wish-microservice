import IProduct from '../../product/product.interface'
import Favorites from './favorites.model'

export default interface FavoritesRepository {
    
    addFavoriteProduct: (favorites: Favorites) => Promise<Favorites>

    getFavoriteProducts: (userId: string) => Promise<Favorites[]>

    getProductById: (productId: string) => Promise<IProduct>

    verifyWishProduct: (userId: string, productId: string) => Promise<Favorites>

    deleteWishProduct: (wishId: string) => Promise<Favorites>

}