import express from "express"
import messageRoutes from "./routes/message.routes"

const appRoutes = express.Router()

appRoutes.use(messageRoutes)

export default appRoutes