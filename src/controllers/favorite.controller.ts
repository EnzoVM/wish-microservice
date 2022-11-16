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
  } catch (error) {
    console.log(error)
        
    response.status(404).json({
      status: 'fail',
      message: 'El producto no ha sido agregado a la lista de favoritos',
      data: {}
    })
  } 
}