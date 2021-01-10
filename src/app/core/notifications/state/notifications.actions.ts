
import { Notification } from './notification.model';

export class PublishNotification<NotificationDataType = any> {
  static readonly type = '[Notification] Publish Notification';

  constructor(
    public notification: Notification<NotificationDataType>
  ) {}

}

export class DismissNotification<NotificationDataType = any> {
  static readonly type = '[Notification] Dismiss Notification';

  constructor(
    public notification: Notification<NotificationDataType>
  ) {}
}
