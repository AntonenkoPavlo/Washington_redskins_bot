import {TelegramService} from "./telegram.service";

import {Injectable} from "@nestjs/common";
import {ParsedUpdate} from "../obligations/parsedUpdate";
import {UpdateProcessor} from "../obligations/updateProcessor";

@Injectable()

export class ChatMemberService implements UpdateProcessor{
    constructor(
        private telegramService: TelegramService,
    ) {}

    async execute(data: ParsedUpdate) {
        if(data.data.message.new_chat_member) {
            this.greetParticipant(data)
        }

        if (data.data.message.left_chat_member){
            this.goodbyeParticipant(data)
        }
    }


    async greetParticipant(data: ParsedUpdate) {
            this.telegramService.sendTextMessage(
                {
                    bot_token: data.bot_token,
                    chat_id: data.data.message.chat.id,
                    text: `${data.data.message.new_chat_member.first_name} joined for misery!`
                }
            )
        }

        async goodbyeParticipant(data: ParsedUpdate) {
            this.telegramService.sendTextMessage(
                {
                    bot_token: data.bot_token,
                    chat_id: data.data.message.chat.id,
                    text: `${data.data.message.left_chat_member.first_name} died for us! Ahaha`
                }
            )
        }
}