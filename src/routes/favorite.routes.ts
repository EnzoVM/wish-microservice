import { Router } from 'express'
import { addFavoriteProduct } from '../controllers/favorite.controller'

const favoriteRouter = Router()

favoriteRouter.post('/create', addFavoriteProduct)

export default favoriteRouter