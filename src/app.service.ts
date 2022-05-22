import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
  private notificationAdmin = new Subject();
  private notificationUser = new Subject();

  addEvent(seeName: string, data) {
    switch (seeName) {
      case 'admin': {
        this.notificationAdmin.next(data);
        break;
      }
      case 'user': {
        this.notificationUser.next(data);
        break;
      }
      default:
        this.notificationUser.next(data);
    }
  }

  sendEventNotificationUser() {
    return this.notificationUser.asObservable();
  }

  sendEventNotificationAdmin() {
    return this.notificationAdmin.asObservable();
  }
}
