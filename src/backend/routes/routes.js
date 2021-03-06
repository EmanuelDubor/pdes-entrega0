import express from "express";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";

const router = express.Router()

router.param('someNew', (req, res, next, value) => {
    Post.findById(value)
        .then(foundNew => {
            if (!foundNew) {
                throw new Error(`Cannot find new: ${value}`)
            }
            req.someNew = foundNew
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
        .then(savedNew => res.json(savedNew))
        .catch(next)
})

router.get('/news/:someNew', (req, res, next) => {
    req.someNew.populate('comments').execPopulate()
        .then(populatedNew => res.json(populatedNew))
        .catch(next)
})

router.put('/news/:someNew/upvote', (req, res, next) => {
    const someNew = req.someNew
    someNew.upvote()
    someNew.save()
        .then(savedNew => res.json(savedNew))
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
        .then(_ => res.json(comment))
        .catch(next)
})

export default router