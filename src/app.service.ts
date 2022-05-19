import { Injectable, OnModuleInit } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
  private events = new Subject();

  addEvent(event) {
    this.events.next(event);
  }

  sendEvents() {
    return this.events.asObservable();
  }
}
