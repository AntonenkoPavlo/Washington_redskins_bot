import {User} from "./user";
import {MessageForUpdate} from "./MessageForUpdate";

export interface CallbackQuery {
    id: string
    from: User
    message: MessageForUpdate
    data?: string
}