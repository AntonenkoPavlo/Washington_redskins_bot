import {Message} from "../telegram-types/message";

export interface DocumentMessage extends Message {
    document: string
    caption?: string
}