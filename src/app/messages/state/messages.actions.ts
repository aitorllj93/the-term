import { Message } from './message.model';

export class SendMessage {
  static readonly type = '[Message] Send Message';
  constructor(public message: Message) {}
}
