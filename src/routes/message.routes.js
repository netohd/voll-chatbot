import { receiveMessage } from "../controllers/message.controller.js";
import express from "express"

const messageRoutes = express.Router();

messageRoutes.post("/liquidations/webhook", receiveMessage);

export default messageRoutes;