const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const ejs = require('ejs')

const general = require('./routes/general')
const initSocket = require('./configs/sockets/sockets')

const port = 50553

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use('/', general)

initSocket(io)

server.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
})