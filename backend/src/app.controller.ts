import {Body, Controller, Get, HttpStatus, Post, Res} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import axios from 'axios';
import {SendMessage} from "./obligation/sendMessage";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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


}
