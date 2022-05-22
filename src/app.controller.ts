import { Body, Controller, Get, Post, Sse } from '@nestjs/common';
import { interval, map } from 'rxjs';
import { AppService } from './app.service';
import { EmitAdminDto } from './dto/emit-admin.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('notification/user')
  sseUser() {
    return this.appService.sendEventNotificationUser();
  }

  @Sse('notification/admin')
  sseAdmin() {
    return this.appService.sendEventNotificationAdmin();
  }

  @Post('emit/notification-admin')
  addEventAdmin(@Body() body: EmitAdminDto) {
    return this.appService.addEvent('admin', {
      data: JSON.stringify(body),
    });
  }
  @Post('emit/notification-user')
  addEventUser(@Body() body: EmitAdminDto) {
    return this.appService.addEvent('user', {
      data: JSON.stringify(body),
    });
  }
}
