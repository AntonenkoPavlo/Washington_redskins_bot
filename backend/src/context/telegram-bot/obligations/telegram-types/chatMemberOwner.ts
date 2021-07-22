import {User} from "./user";

export interface ChatMemberOwner {
    status: string
    user: User
    is_anonymous: boolean
}