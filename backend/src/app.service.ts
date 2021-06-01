import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getFuckResponse(): string {
    return "WE DON'T FUCKING CARE!!!";
  }
}
