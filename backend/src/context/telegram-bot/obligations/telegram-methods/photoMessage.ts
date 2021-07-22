import {Message} from "../telegram-types/message";

export interface PhotoMessage extends Message{
    photo: string
    caption?: string
}