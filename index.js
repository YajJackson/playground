const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path');

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html')
})

app.listen(3000, function(){
    console.log('listening on port: 3000')
})