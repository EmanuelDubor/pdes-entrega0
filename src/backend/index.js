import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/news')

const app = express()
app.use(bodyParser.json())

import routes from './routes/routes.js'
app.use(routes)

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
