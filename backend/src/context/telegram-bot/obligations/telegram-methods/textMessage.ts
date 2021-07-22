import {Message} from "../telegram-types/message";
import {ReplyKeyboardMarkup} from "../telegram-types/replyKeyboardMarkup";
import {InlineKeyboardMarkup} from "../telegram-types/inlineKeyboardMarkup";
import {ReplyKeyboardRemove} from "../telegram-types/replyKeyboardRemove";

export interface TextMessage extends Message {
    text: string
    reply_markup?: ReplyKeyboardMarkup | InlineKeyboardMarkup | ReplyKeyboardRemove
}