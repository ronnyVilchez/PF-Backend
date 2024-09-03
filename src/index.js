import express from 'express'
import morgan from 'morgan'
import { PORT } from './config/config.js'
import routerUser from './Routes/user.routes.js'

const app= express()
app.use(morgan('dev'))
app.use(express.json())


app.use('/api/user',routerUser)


app.listen(PORT,()=>{console.log(`Servidor Levantado en http//localhost:${PORT}`)})
