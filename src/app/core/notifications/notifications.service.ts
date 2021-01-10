import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { NotyOptions, NotyService } from './providers/noty.service';
import { Notification } from './state/notification.model';

import { SoundsService } from '../sounds.service';

export interface NotificationsOptions {
  engineOptions?: NotyOptions;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  instances = new Map<string, Notification>();

  constructor(
    private floattingService: NotyService,
    private soundsService: SoundsService,
  ) { }

  publish(
    notification: Notification
  ) {

    const id = uuid();

    const floattingText = `
      <ul class="list-group">
        <li class="list-group-item">
          <img class="img-circle media-object pull-left" src="${notification.picture}" width="64" height="64">
          <div class="media-body">
            <strong>${notification.title}</strong>
            <p>${notification.text}</p>
          </div>
        </li>
      </ul>
    `;

    const floatting = this.floattingService.create({
      text: floattingText,
      ...notification.options,
      theme: 'mint',
    });

    floatting.show();
    this.soundsService.play('assets/sounds/alerts-and-notifications/notification_simple-01.wav');

    notification.id = id;
    notification.floattingInstance = floatting;

    this.instances.set('notificationId', notification);

    return notification;
  }

  hide(notificationId: string) {
    const notification = this.instances.get(notificationId);

    if (!notification) {
      throw new Error(`Notification with id: ${notificationId} not available`);
    }
  }
}
