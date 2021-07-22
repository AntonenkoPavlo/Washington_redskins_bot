import {Injectable} from "@nestjs/common";
import {TelegramService} from "./telegram.service";
import {ParsedUpdate} from "../obligations/parsedUpdate";
import {UpdateProcessor} from "../obligations/updateProcessor";

@Injectable()

export class CallbackQueryService implements UpdateProcessor {
    constructor(
        private telegramService: TelegramService,
    ) {}

    async execute(parsedUpdate: ParsedUpdate) {
        if(parsedUpdate.data.callback_query.data == '0') {
            this.buttonPhoto(parsedUpdate)
        }

        if(parsedUpdate.data.callback_query.data == '1') {
            this.buttonVideo(parsedUpdate)
        }
    }

    async buttonPhoto(data: ParsedUpdate) {
        this.telegramService.sendPhotoMessage(
            {
                bot_token: data.bot_token,
                chat_id: data.data.callback_query.message.chat.id,
                photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdg6QGg1uXffLO7MIaDoEjw3bvdelc5afKQ&usqp=CAU'
            }
        )
    }

    async buttonVideo(data: ParsedUpdate) {
        this.telegramService.sendVideoMessage(
            {
                bot_token: data.bot_token,
                chat_id: data.data.callback_query.message.chat.id,
                video: 'BAACAgIAAxkBAAICj2DrRUwIWrT1ki-6YHJaa5yMV8QAA3gRAAITE1lLtzo0G9tebIMgBA'
            }
        )
    }
}