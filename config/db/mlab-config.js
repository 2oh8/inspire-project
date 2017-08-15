var mongoose = require('mongoose')
var connection = mongoose.connection

mongoose.connect('mongodb://databaseone:dataaccess@ds034807.mlab.com:34807/databaseone', {
  server:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
  replset:{socketOptions:{keepAlive: 300000, connectTimeoutMS: 30000}},
})

connection.on('error', (err) =>{
  console.log('mLab Connection Error', err)
})

connection.once('open', ()=>{
  console.log('Connected to mLab')
})