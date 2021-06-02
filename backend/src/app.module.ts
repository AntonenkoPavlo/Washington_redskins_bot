import { Module } from '@nestjs/common';
import {ProductModule} from "./context/product";
import {TelegramBotModule} from "./context/telegram-bot";

@Module({
  imports: [
      ProductModule,
      TelegramBotModule,
  ],
  controllers: [
     
  ],
  providers: [

  ]
})
export class AppModule {}
