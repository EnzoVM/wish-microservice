import { Router } from 'express'
import { addFavoriteProduct, getFavoriteProduct } from '../controllers/favorite.controller'

const favoriteRouter = Router()

favoriteRouter.post('/create', addFavoriteProduct)
favoriteRouter.get('/list/:userId', getFavoriteProduct)

export default favoriteRouter