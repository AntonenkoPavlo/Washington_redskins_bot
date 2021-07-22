import {Body, Controller, Post, Res} from '@nestjs/common';

import {GetUpdates} from "../obligations/telegram-methods/getUpdates";
import {UpdateHandler} from "../context/updateHandler";
import {Response} from "express";

@Controller('telegram')
export class TelegramBotController {
  constructor(
      private updateHandler: UpdateHandler
) {}

    @Post('update')
  async getUpdate(@Res() response:Response, @Body() data: GetUpdates) {
      this.updateHandler.execute(data)

      return response.send()
  }
}
