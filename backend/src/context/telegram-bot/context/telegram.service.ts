import axios from 'axios';
import {Injectable} from "@nestjs/common";

@Injectable()
export class TelegramService {
    public static quantity: number = 0;
    private botUrl: string = 'https://api.telegram.org/bot1794049923:AAFROWqPqBpfmgF1ArYHK7JBfRFGAP0yvF0/sendMessage';

    async sendMessage(data:{chat_id:number, text?:string}):Promise<void> {
        // this.quantity++;
        TelegramService.quantity = TelegramService.quantity + 1;
        console.log(`sendMessage ${TelegramService.quantity}`)
        try {
         await   axios.post(
                this.botUrl,
                {
                    chat_id: data.chat_id,
                    text: TelegramService.quantity + ' messages accepted'
                }
            )
        } catch (e) {
            console.log(e?.response?.data || e.message)
        }
    }
}