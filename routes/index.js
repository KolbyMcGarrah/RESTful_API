const index = require('express').Router()
const postRouter = require('./posts')
const commentsRouter = require('./comments')

index.use('/posts/:id/comments/', commentsRouter)
index.use('/posts', postRouter)

module.exports = index