import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFuckResponse(): string {
    return "We always do nothing for you. Fu** you. Bye bye.";
  }
}
