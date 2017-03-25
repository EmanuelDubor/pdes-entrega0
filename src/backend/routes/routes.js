import express from 'express'
import Post from '../models/Post.js'

const router = express.Router()


router.get('/news', (req, res, next) => {
    Post.find()
        .then(news => res.json(news))
        .catch(next)
})

router.param('some_new_id', (req, res, next, value) => {
    Post.findById(req.params.some_new_id)
        .then(someNew => {
            if (!someNew) {
                throw new Error(`Cannot find new: ${value}`)
            }
            req.someNew = someNew
            next()
        })
        .catch(next)
})

router.get('/news/:some_new_id', (req, res, next) => {
    res.json(req.someNew)
})

router.put('/news/:some_new_id/upvote', (req, res, next) => {
    const someNew = req.someNew
    someNew.upvote()
    someNew.save()
        .then(someNew => res.json(someNew))
        .catch(next)
})

router.post('/news', (req, res, next) => {
    const someNew = new Post(req.body)
    someNew.save()
        .then(someNew => res.json(someNew.id))
        .catch(next)
})

export default router