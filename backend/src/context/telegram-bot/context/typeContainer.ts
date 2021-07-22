import {Injectable} from "@nestjs/common";

import {CallbackQueryService} from "./callbackQuery.service";
import {ChatMemberService} from "./chatMember.service";
import {IncomingMessageService} from "./incomingMessage.service";
import {UpdateType} from "../obligations/telegram-types/updateType";
import {UpdateProcessor} from "../obligations/updateProcessor";

@Injectable()

export class TypeContainer {
    constructor(
        private callbackQueryService: CallbackQueryService,
        private chatMemberService: ChatMemberService,
        private incomingMessageService: IncomingMessageService,
    ) {}

    get(type: UpdateType): UpdateProcessor {
        if(!this.container[type]) {
            throw new Error(`unknown type processor ${type}`)
        }

        return this.container[type]
    }

    private get container(): Record<UpdateType, UpdateProcessor> {
        return {
            [UpdateType.MESSAGE]: this.incomingMessageService,
            [UpdateType.CALLBACK_QUERY]: this.callbackQueryService,
            [UpdateType.CHAT_MEMBER]: this.chatMemberService,
        }
    }
}