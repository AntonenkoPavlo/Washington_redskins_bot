import axios from 'axios';
import {Injectable} from "@nestjs/common";

import {TextMessage} from "../obligations/telegram-methods/textMessage";
import {PhotoMessage} from "../obligations/telegram-methods/photoMessage";
import {DocumentMessage} from "../obligations/telegram-methods/documentMessage";
import {MessageToSend} from "../obligations/messageToSend";
import {VideoMessage} from "../obligations/telegram-methods/videoMessage";

@Injectable()

export class TelegramService {

    private static async send(messageToSend: MessageToSend): Promise<void> {
        try {
            await   axios.post(
                `https://api.telegram.org/bot${messageToSend.bot_token}${messageToSend.method}`,
                messageToSend.data
            )
        } catch (e) {
            console.log(e?.response?.data || e.message)
        }
    }

    async sendTextMessage(textMessage: TextMessage):Promise<void> {
        await TelegramService.send(
           {
               bot_token: textMessage.bot_token,
               method: '/sendMessage',
               data: textMessage
           }
        )
    }

    async sendPhotoMessage(photoMessage: PhotoMessage):Promise<void> {
        await TelegramService.send(
            {
                bot_token: photoMessage.bot_token,
                method: '/sendPhoto',
                data: photoMessage
            }
        )
    }

    async sendVideoMessage(videoMessage: VideoMessage):Promise<void> {
        await TelegramService.send(
            {
                bot_token: videoMessage.bot_token,
                method: '/sendVideo',
                data: videoMessage
            }
        )
    }

    async sendDocumentMessage(documentMessage: DocumentMessage):Promise<void> {
        await TelegramService.send(
            {
                bot_token: documentMessage.bot_token,
                method: '/sendDocument',
                data: documentMessage
            }
        )
    }
}