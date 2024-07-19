var socket = io()

$('#sendMessage').on('submit', (event) => {
    event.preventDefault()

    var message = window.document.getElementById('message').value

    socket.emit('chat message', message)
})