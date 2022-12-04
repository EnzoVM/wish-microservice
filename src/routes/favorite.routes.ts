import { Router } from 'express'
import { addFavoriteProduct, getFavoriteProduct, deleteWishProduct } from '../controllers/favorite.controller'

const favoriteRouter = Router()

favoriteRouter.post('/create', addFavoriteProduct)
favoriteRouter.get('/list/:userId', getFavoriteProduct)
favoriteRouter.delete('/delete/wish/:wishId', deleteWishProduct)

export default favoriteRouter