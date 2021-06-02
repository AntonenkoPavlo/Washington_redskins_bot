import {Module} from "@nestjs/common";
import {TelegramService} from "./context/telegram.service";
import {TelegramBotController} from "./api/telegramBot.controller";
import {AppService} from "./context/app.service";

@Module({
    providers: [
        TelegramService,
        AppService,
    ],
    controllers: [
        TelegramBotController,
    ]
})
 export class TelegramBotModule {

}