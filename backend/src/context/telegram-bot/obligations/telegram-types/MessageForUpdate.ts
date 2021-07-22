import {User} from "./user";
import {Chat} from "./chat";
import {Sticker} from "./sticker";

export interface MessageForUpdate {
    message_id: number
    from?: User
    date: number
    chat: Chat
    left_chat_member?: User
    new_chat_member?: User
    text?: string
    sticker?: Sticker
}