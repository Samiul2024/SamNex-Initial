import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"

import http from "http"

import { Server } from "socket.io"

import connectDB from "./config/db.js"

import routes from "./routes/index.js"

import  notFound  from "./middleware/notFound.js"

import  errorHandler  from "./middleware/errorMiddleware.js"

import setupSocket from "./socket.js"

dotenv.config()

connectDB()

const app = express()

const server = http.createServer(app)

const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.DASHBOARD_URL,
]

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
)

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true,
  },
})

setupSocket(io)

app.use(express.json())

app.use(morgan("dev"))

app.use("/api", routes)

app.use(notFound)

app.use(errorHandler)

const PORT =
  process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})