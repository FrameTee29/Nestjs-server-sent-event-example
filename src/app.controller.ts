import { Body, Controller, Get, Post, Sse } from '@nestjs/common';
import { interval, map } from 'rxjs';
import { AppService } from './app.service';
import { EmitAdminDto } from './dto/emit-admin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('notification/admin')
  sse() {
    return this.appService.sendEvents();
  }

  @Post('emit/notification-admin')
  addEvent(@Body() body: EmitAdminDto) {
    return this.appService.addEvent({ data: JSON.stringify(body) });
  }
}
