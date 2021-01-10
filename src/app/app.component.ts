import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Message } from './messages/state/message.model';
import { SendMessage } from './messages/state/messages.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'the-term';

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    const message: Message = {
      author: {
        username: 'Test',
        picture: 'assets/images/avatars/001.svg',
      },
      text: 'Hello'
    };

    this.store.dispatch([
      new SendMessage(message),
      new SendMessage(message),
      new SendMessage(message),
      new SendMessage(message),
      new SendMessage(message),
    ]);
  }
}
