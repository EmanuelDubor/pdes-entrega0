import express from "express";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const router = express.Router()

router.param('someNew', (req, res, next, value) => {
    Post.findById(req.params.someNew)
        .then(someNew => {
            if (!someNew) {
                throw new Error(`Cannot find new: ${value}`)
            }
            req.someNew = someNew
            next()
        })
        .catch(next)
})

router.get('/news', (req, res, next) => {
    Post.find()
        .then(news => res.json(news))
        .catch(next)
})

router.post('/news', (req, res, next) => {
    const someNew = new Post(req.body)
    someNew.save()
        .then(someNew => res.json(someNew.id))
        .catch(next)
})

router.get('/news/:someNew', (req, res, next) => {
    req.someNew.populate('comments').execPopulate()
        .then(someNew => res.json(someNew))
        .catch(next)
})

router.put('/news/:someNew/upvote', (req, res, next) => {
    const someNew = req.someNew
    someNew.upvote()
    someNew.save()
        .then(someNew => res.json(someNew))
        .catch(next)
})

router.post('/news/:someNew/comments', (req, res, next) => {
    const someNew = req.someNew
    let comment = new Comment(req.body)
    comment.post = someNew

    comment.save()
        .then(savedComment => {
            comment = savedComment
            someNew.comments.push(comment)
            return someNew.save()
        })
        .then(someNew => res.json(comment))
        .catch(next)
})

export default router