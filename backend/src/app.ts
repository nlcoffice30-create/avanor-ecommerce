import express, { Express, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'AVANOR API is running' })
})

// API Routes (to be added)
app.use('/api/products', require('./routes/products').default)
app.use('/api/users', require('./routes/users').default)
app.use('/api/orders', require('./routes/orders').default)
app.use('/api/auth', require('./routes/auth').default)

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  })
})

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, error: 'Route not found' })
})

export default app
