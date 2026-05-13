import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"

import connectDB from "./config/db.js"

import routes from "./routes/index.js"

import notFound from "./middleware/notFound.js"
import errorMiddleware from "./middleware/errorMiddleware.js"

dotenv.config()

connectDB()

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

app.use("/api", routes)

app.use(notFound)

app.use(errorMiddleware)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  )
})