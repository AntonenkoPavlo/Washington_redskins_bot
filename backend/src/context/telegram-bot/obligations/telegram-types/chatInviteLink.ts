import {User} from "./user";

export interface ChatInviteLink {
    invite_link: string
    creator: User
    is_primary: boolean
    is_revoked: boolean
}