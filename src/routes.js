import express from "express"
import messageRoutes from "./routes/message.routes.js"

const appRoutes = express.Router()

appRoutes.use(messageRoutes)

export default appRoutes