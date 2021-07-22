import {CallbackQuery} from "../telegram-types/callbackQuery";
import {MessageForUpdate} from "../telegram-types/MessageForUpdate";

export interface GetUpdates {
    update_id: number
    message?: MessageForUpdate
    callback_query?: CallbackQuery
}