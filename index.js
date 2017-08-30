const express = require('express')
const app = express()
const http = require('http').Server(app)

app.get('/', function(req, res){
    res.send('server working')
})

app.listen(3000, function(){
    console.log('listening on port: 3000')
})