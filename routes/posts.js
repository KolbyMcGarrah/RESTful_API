const posts = require('express').Router()
posts.get('/', function(req,res,next){
    res.send(req.store.posts)
    console.log('Post get request success')
})
posts.post('/', function(req,res,next){
    let newPost = req.body
    let id = req.store.posts.length
    req.store.posts.push(newPost)
    res.status(201).send({id:id})
    console.log('Post post request success')
})
posts.put('/:id/', function(req,res,next){
    req.store.posts[req.params.id] = req.body
    res.status(200).send(req.store.posts[req.params.id])
    console.log('Post put request success')
})
posts.delete('/:id/', function(req,res,next){
    req.store.posts.splice(req.params.id,1)
    res.status(204).send()
    console.log('Posts delete request success')
})
module.exports = posts