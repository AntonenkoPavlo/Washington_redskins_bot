import {User} from "./user";
import {Chat} from "./chat";
import {ChatInviteLink} from "./chatInviteLink";
import {ChatMemberLeft} from "./chatMemberLeft";
import {ChatMemberMember} from "./chatMemberMember";
import {ChatMemberOwner} from "./chatMemberOwner";

export interface ChatMemberUpdated {
    chat: Chat
    from: User
    date: number
    old_chat_member: ChatMemberUpdated | ChatMemberLeft | ChatMemberMember | ChatMemberOwner
    new_chat_member: ChatMemberUpdated | ChatMemberLeft | ChatMemberMember | ChatMemberOwner
    invite_link?: ChatInviteLink
}