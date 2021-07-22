import {Injectable} from "@nestjs/common";
import {TelegramService} from "./telegram.service";
import {ParsedUpdate} from "../obligations/parsedUpdate";
import {UpdateProcessor} from "../obligations/updateProcessor";

@Injectable()

export class IncomingMessageService implements UpdateProcessor{
    constructor(
        private telegramService: TelegramService,
    ) {}

    async execute(data: ParsedUpdate) {
        this.telegramService.sendTextMessage(
            {
                bot_token: data.bot_token,
                chat_id: data.data.message.chat.id,
                text: `Fuck you, ${data.data.message.from.first_name}`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "Go fuck without talking",
                                callback_data: "0"
                            },
                            {
                                text: "Get to know a little more",
                                callback_data: "1"
                            }
                        ]
                    ]
                }
            }
        )
    }
}