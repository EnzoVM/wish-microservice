import express, { Request, Response } from 'express'
import morgan from 'morgan'
import notFound from './middlewares/not.found'
import cors from 'cors'
import favoriteRouter from './routes/favorite.routes'
const app = express()

app.set('PORT', process.env.PORT || 3004)

app.use(express.json())
app.use(morgan('dev'))
app.use(cors({
  origin: '*'
}))

app.get('/', (request: Request, response: Response) => {
  response.status(201).json({
    message: 'Product Microservice v.1'
  }).end()
})

app.use('/api/v1/favorites', favoriteRouter)
app.use(notFound)

app.listen(app.get('PORT'), () => {
  console.log(`Server is running on port ${app.get('PORT')}`)
})
