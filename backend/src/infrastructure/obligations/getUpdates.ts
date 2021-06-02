export interface GetUpdates {
    message: {
        from: {
            user_id: number
            user_name: string
        }
        chat: {
            id: number
        }
    }
}