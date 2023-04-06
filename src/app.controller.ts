import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const api_key='jeJAasdjhdb45afVHVsf';
    return this.appService.getHello();
  }
}
