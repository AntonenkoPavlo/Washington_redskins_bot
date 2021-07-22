import {GetUpdates} from "./telegram-methods/getUpdates";
import {UpdateType} from "./telegram-types/updateType";

export interface ParsedUpdate {
    bot_token: string
    type: UpdateType
    data: GetUpdates
}