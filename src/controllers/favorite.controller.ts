import FavoriteUseCase from '../core/favorites/application/favorites.usecase'
import FavoritesPrismaRepository from '../core/favorites/infraestructure/prisma/favorites.prisma.repository'
import { Request, Response } from 'express'

const favoriteUseCase = new FavoriteUseCase(new FavoritesPrismaRepository)

export const addFavoriteProduct = async (request: Request, response: Response) => {
  const {productId, userId} = request.body

  try {
    const newFavoriteProduct = await favoriteUseCase.addFavoriteProduct(productId, userId)
        
    response.status(200).json({
      status: 'OK',
      message: 'El producto ha sido agregado con exito a la lista de favoritos',
      data: newFavoriteProduct
    })  
  } catch (error:any) {
    console.log(error)
        
    response.status(404).json({
      status: 'fail',
      message: error.message,
      data: {}
    })
  } 
}

export const getFavoriteProduct = async (request: Request, response: Response) => {
  const userId = request.params.userId

  try {
    const favoriteProductsFound = await favoriteUseCase.getFavoritesProducts(userId)
        
    response.status(200).json({
      status: 'OK',
      message: 'Listado de productos favoritos ',
      data: favoriteProductsFound
    })  
  } catch (error) {
    console.log(error)
        
    response.status(404).json({
      status: 'fail',
      message: 'No se encuentra el listado de productos favoritos',
      data: {}
    })
  } 
}

export const deleteWishProduct = async (request: Request, response: Response) => {
  const wishId = request.params.wishId

  try {
    const favoriteProductsDeleted = await favoriteUseCase.deleteWishProduct(wishId)
        
    response.status(200).json({
      status: 'OK',
      message: 'El producto se ha eliminado del listado de favoritos ',
      data: favoriteProductsDeleted
    })  
  } catch (error) {
    console.log(error)
        
    response.status(404).json({
      status: 'fail',
      message: 'El producto no se ha eliminado del listado',
      data: {}
    })
  } 
}