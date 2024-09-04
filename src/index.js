import express from 'express'
import morgan from 'morgan'
import { PORT } from './config/config.js'
import routerUser from './Routes/user.routes.js'
import routerIncident from './Routes/incident.routes.js'
import routerComment from './Routes/comment.routes.js'
import routerAuth from './Routes/auth.routes.js'

const app= express()
app.use(morgan('dev'))
app.use(express.json())


app.use('/api/user',routerUser)
app.use('/api/incident',routerIncident)
app.use('/api/comment',routerComment)

app.use('/api/auth',routerAuth)


app.listen(PORT,()=>{console.log(`Servidor Levantado en http//localhost:${PORT}`)})
