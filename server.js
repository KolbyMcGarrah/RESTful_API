const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const commentsRouter = require('./routes/comments')
//create the store object 
let store = {
    posts:[
        {
            comments:[]
        }
    ]
}
//create express app and apply middleware
let app = express()
app.use(bodyParser.json()) //converts the message to JSON
app.use(logger('dev')) //used to log what's going on to the console
app.use(errorhandler()) //built in error handler
app.use((req,res,next)=>{
    req.store = store
    next()
})
app.use('/', indexRouter)//sets up router to send all posts to the post file
//wait for incomming requests on port 3000
app.listen(3000, function() {
    console.log('listening on port 3000...')
})