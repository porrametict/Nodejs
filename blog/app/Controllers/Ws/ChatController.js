'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage (mesaage) {
    this.socket.broadcastToAll('message',mesaage)
  }

}

module.exports = ChatController
