import { receiveMessageService } from "../services/message.service.js" 

export const receiveMessage = async (req, res) => {
    const msg = req.body.textMsg
    const clientId = req.params.date
    const result = await receiveMessageService(msg, clientId)
    return res.status(200).json(result)
}