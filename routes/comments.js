const comments = require('express').Router()
let store = require('./posts.js')
comments.get('/', function(req,res,next){
    res.send(req.store.posts[req.id].comments)
})
comments.post('/', function(req,res,next){
    let postID = req.id
    let newComment = req.body
    req.store.posts[postID].comments.push(newComment)
    commentID = req.store.posts[postID].comments.length
    res.send()
})
comments.put('/:commentID', function(req,res,next){
    req.store.posts[req.id].comments[req.params.commentID] = req.body
    res.status(200).send(req.store.posts[req.id].comments[req.params.commentID])
})
comments.delete('/:commentID', function(req,res,next){
    req.store.posts[req.id].comments.splice(req.params.commentID,1)
    res.status(204).send()
    console.log('Comments delete request success')
})
module.exports = comments