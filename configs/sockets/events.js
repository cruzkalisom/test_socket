var chat = (socket) => {
    socket.on('chat message', (message) => {
        console.log(message)
    })

    socket.on('disconnect', () => {
        console.log('Usuário desconectado: ' + socket.id)
    })
}

module.exports = {
    chat: chat
}