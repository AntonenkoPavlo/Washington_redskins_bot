import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import { AppService } from '../context/app.service';
import {Response, text} from 'express';
import axios from 'axios';
import {SendMessage} from "../../../infrastructure/obligations/sendMessage";
import {GetUpdates} from "../../../infrastructure/obligations/getUpdates";
import {TelegramService} from "../context/telegram.service";

@Controller()
export class TelegramBotController {
  constructor(
      private readonly appService: AppService,
      private telegramService: TelegramService
  ) {}

  @Post('hello')
  async getHello(@Res() response:Response, @Body() data: SendMessage) {
    const response2 = await axios.post(
        `https://tlg-dispenser.geek-lama.com/api/bot812633663:AAG-9_Jtf4VRz8amAcX1BxdIKvbhhFf_OG0/dev`,
        {
          chat_id: '-1001211295052',
          text: data?.text || 'empty message',
          parse_mode: 'HTML'
        }
    )

    return response.status(HttpStatus.FORBIDDEN).send(this.appService.getFuckResponse());
  }

  @Post('bot')
  async  processMessageFromTelergam(@Res()response:Response, @Body() body: GetUpdates){
       TelegramService.quantity = 9
       console.log(TelegramService.quantity)
        await this.telegramService.sendMessage({
            chat_id: body.message.chat.id
        })

      return response.status(200).send();
  }
}
