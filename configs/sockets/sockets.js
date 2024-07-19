const events = require('./events')

var initSocket = (io) => {
    io.on('connection', (socket) => {
        console.log('Usuário conectado: ' + socket.id)
    
        events.chat(socket)
    })
}

module.exports = initSocket