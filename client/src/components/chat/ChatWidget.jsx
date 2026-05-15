import {
  useEffect,
  useState,
} from "react"

import io from "socket.io-client"

const socket = io(
  "http://localhost:5000"
)

const ChatWidget = () => {
  const [message, setMessage] =
    useState("")

  const [messages, setMessages] =
    useState([])

  useEffect(() => {
    socket.on(
      "receive_message",
      (data) => {
        setMessages((prev) => [
          ...prev,
          data,
        ])
      }
    )

    return () =>
      socket.off(
        "receive_message"
      )
  }, [])

  const sendMessage = () => {
    if (!message.trim()) return

    const messageData = {
      sender: "Client",

      text: message,
    }

    socket.emit(
      "send_message",
      messageData
    )

    setMessage("")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 rounded-2xl border border-white/10 bg-secondary shadow-2xl">
      <div className="rounded-t-2xl bg-primary p-4 font-bold">
        SamNex Support
      </div>

      <div className="h-80 overflow-y-auto p-4 space-y-3">
        {messages.map(
          (msg, index) => (
            <div
              key={index}
              className={`rounded-xl p-3 ${
                msg.sender ===
                "Client"
                  ? "bg-primary"
                  : "bg-dark"
              }`}
            >
              <p className="text-sm font-bold">
                {msg.sender}
              </p>

              <p>{msg.text}</p>
            </div>
          )
        )}
      </div>

      <div className="flex gap-2 border-t border-white/10 p-4">
        <input
          type="text"
          value={message}
          onChange={(e) =>
            setMessage(
              e.target.value
            )
          }
          placeholder="Type message..."
          className="flex-1 rounded-xl bg-dark p-3 outline-none"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-primary px-4"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatWidget