import express from 'express'
import Post from '../models/Post.js'

const router = express.Router()

const next = err => next(err)

router.get('/news', (req, res) => {
    Post.find()
        .then(news => res.json(news))
        .catch(next)
})

router.post('/news', (req, res) => {
    const newNew = new Post(req.body)
    newNew.save()
        .then(newNew => res.sendStatus(200))
        .catch(next)
})

export default router