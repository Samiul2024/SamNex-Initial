import { useEffect, useRef, useState } from "react"
import io from "socket.io-client"
import {
  MessageCircle,
  Minus,
  SendHorizonal,
} from "lucide-react"

const socket = io(import.meta.env.VITE_SOCKET_URL)

const ChatWidget = () => {
  const [isOpen, setIsOpen] =
    useState(false)

  const [message, setMessage] =
    useState("")

  const [messages, setMessages] =
    useState([])

  const bottomRef = useRef(null)

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

    return () => {
      socket.off(
        "receive_message"
      )
    }
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [messages])

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

    setMessages((prev) => [
      ...prev,
      messageData,
    ])

    setMessage("")
  }

  return (
    <div className="fixed bottom-3 right-3 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() =>
            setIsOpen(true)
          }
          className="
            flex h-14 w-14 items-center justify-center
            rounded-full
            bg-primary
            text-white
            shadow-2xl
            transition-all
            hover:scale-105
            active:scale-95
          "
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div
          className="
            w-[220px]
            sm:w-[260px]
            lg:w-[320px]
            overflow-hidden
            rounded-2xl
            border border-white/10
            bg-secondary/95
            shadow-[0_10px_40px_rgba(0,0,0,0.45)]
            backdrop-blur-xl
            animate-in fade-in zoom-in-95
          "
        >
          {/* Header */}
          <div
            className="
              flex items-center justify-between
              bg-primary
              px-3 py-2
            "
          >
            <div>
              <h2 className="text-xs font-bold text-white">
                SamNex
              </h2>

              <p className="text-[9px] text-white/70">
                Support
              </p>
            </div>

            <button
              onClick={() =>
                setIsOpen(false)
              }
              className="
                flex h-6 w-6 items-center justify-center
                rounded-md
                bg-white/10
                text-white
                transition-all
                hover:bg-white/20
              "
            >
              <Minus size={14} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="
              h-[160px]
              sm:h-[220px]
              lg:h-[300px]
              space-y-2
              overflow-y-auto
              bg-secondary
              p-2
            "
          >
            {messages.map(
              (msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender ===
                    "Client"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[85%]
                      rounded-2xl
                      px-2.5 py-2
                      text-[11px]
                      leading-relaxed
                      break-words
                      ${
                        msg.sender ===
                        "Client"
                          ? "bg-primary text-white rounded-br-md"
                          : "bg-dark text-white/90 rounded-bl-md"
                      }
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              )
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="
              border-t border-white/10
              bg-secondary
              p-2
            "
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) =>
                  setMessage(
                    e.target.value
                  )
                }
                onKeyDown={(e) =>
                  e.key ===
                    "Enter" &&
                  sendMessage()
                }
                placeholder="Message..."
                className="
                  h-9
                  flex-1
                  rounded-xl
                  bg-dark
                  px-3
                  text-[11px]
                  text-white
                  outline-none
                  placeholder:text-white/40
                "
              />

              <button
                onClick={sendMessage}
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-xl
                  bg-primary
                  text-white
                  transition-all
                  hover:scale-105
                  active:scale-95
                "
              >
                <SendHorizonal
                  size={14}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatWidget