import {Message} from "../telegram-types/message";

export interface VideoMessage extends Message{
    video: string
}