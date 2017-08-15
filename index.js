//require your dependencies
var express = require('express')
var bodyParser = require('body-parser')
var dbConnect = require('./config/db/mlab-config')
var port = 3000



//tell your server what it needs to use
var server = express()
server.use(express.static(__dirname + '/public' ))

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))


//register your todos routes as api/routes
var todosRouter = require('./routes/todos')
server.use('/api/todos', todosRouter)



//start your server listening....
server.listen(port,()=>{
  console.log('Listening on port: ', port)
})