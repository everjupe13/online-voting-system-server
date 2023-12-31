import express from 'express'
import config from './configs/express'
import { userRoutes } from './routes/userRoutes'
import { profileRoutes } from './routes/profileRoutes'
import { topicsRoutes } from './routes/topicsRoutes'
import { votesRoutes } from './routes/votesRoutes'
import { starsRoutes } from './routes/starsRoutes'

import { router } from './src'

const app = express()


app.use(config)
app.use(userRoutes)
app.use(topicsRoutes)
app.use(votesRoutes)
app.use(profileRoutes)
app.use(starsRoutes)


app.use(router)

export default app
