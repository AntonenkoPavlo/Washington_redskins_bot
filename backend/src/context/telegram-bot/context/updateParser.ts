import {Injectable} from "@nestjs/common";

import {GetUpdates} from "../obligations/telegram-methods/getUpdates";
import {ParsedUpdate} from "../obligations/parsedUpdate";
import {UpdateType} from "../obligations/telegram-types/updateType";

@Injectable()

export class UpdateParser {
    private botToken: string = '1794049923:AAFhYSvCj5xvuKbrmVvk4ikMk_f6lkMMJcc'
    private parsedUpdate = {} as ParsedUpdate

    parseUpdate(data: GetUpdates): ParsedUpdate {
        this.parsedUpdate.bot_token = this.botToken
        this.parsedUpdate.data = data

        if(data.callback_query) {
            this.parsedUpdate.type = UpdateType.CALLBACK_QUERY
        }

        if(data.hasOwnProperty('message')) {
            if(data.message.left_chat_member || data.message.new_chat_member) {
                this.parsedUpdate.type = UpdateType.CHAT_MEMBER
            }
            if(data.message.text || data.message.sticker) {
                this.parsedUpdate.type = UpdateType.MESSAGE
            }
        }

        return this.parsedUpdate
    }
}