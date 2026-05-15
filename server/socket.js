const setupSocket = (io) => {
  io.on("connection", (socket) => {
    console.log(
      "Client Connected:",
      socket.id
    )

    socket.on(
      "send_message",
      (messageData) => {
        io.emit(
          "receive_message",
          messageData
        )
      }
    )

    socket.on("disconnect", () => {
      console.log(
        "Client Disconnected:",
        socket.id
      )
    })
  })
}

export default setupSocket