import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/news')

const postSchema = new mongoose.Schema({
    title:  String,
    content: String,
    upvotes: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
})

const Post = mongoose.model('Post', postSchema)

const app = express()
app.use(bodyParser.json())

app.get('/news', (req, res) => {
    Post.find()
        .then(news => res.json(news))
        .catch(err => next(err))
})

app.post('/news', (req, res) => {
    const newNew = new Post(req.body)
    newNew.save()
        .then(newNew => res.sendStatus(200))
        .catch(err => next(err))
})

const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
