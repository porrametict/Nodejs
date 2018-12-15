'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request

    console.log(socket.topic)

  }

  onMessage (mesaage) {
    this.socket.broadcastToAll('message',mesaage)
  }

}

module.exports = ChatController
