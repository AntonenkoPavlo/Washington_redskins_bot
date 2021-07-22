import {Module} from "@nestjs/common";

import {TelegramService} from "./context/telegram.service";
import {TelegramBotController} from "./api/telegramBot.controller";
import {ChatMemberService} from "./context/chatMember.service";
import {IncomingMessageService} from "./context/incomingMessage.service";
import {CallbackQueryService} from "./context/callbackQuery.service";
import {UpdateParser} from "./context/updateParser";
import {TypeContainer} from "./context/typeContainer";

@Module({
    providers: [
        TelegramService,
        ChatMemberService,
        IncomingMessageService,
        CallbackQueryService,
        UpdateParser,
        TypeContainer,
    ],
    controllers: [
        TelegramBotController,
    ]
})
 export class TelegramBotModule {

}