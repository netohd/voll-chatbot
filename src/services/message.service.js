import axios from "axios"
import { BASE_URL } from "../utils/config.js"

export const receiveMessageService = (textMsg, clientId) => {
    let finalMsg = 'teste'
    sendMessageService(finalMsg)
}

const handleMessage = async (textMsg) => {
    switch (textMsg) {
        case 1:

        case 2: 

        case 3:

        default: 
            await sendFallbackMessageService()
    }
}

const sendMessageService = async (textMsg) => {
    response = await axios.post(`${BASE_URL}`, authBody)
        .then((res) => {
            console.log(res.data)
            return res.data
        })
        .catch((err) => {
            console.log(err.message)
        })
}

const sendFallbackMessageService = async () => {
    const fallbackMsg = "Desculpe, não entendi. Escolha um número por favor."
    await sendMessageService(fallbackMsg)
}