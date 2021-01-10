
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { PublishNotification } from 'src/app/core/notifications/state/notifications.actions';

import { SendMessage } from './messages.actions';
import { Message } from './message.model';

export class MessagesStateModel {
  messages: Array<Message>;
}

@State<MessagesStateModel>({
  name: 'messages',
  defaults: {
    messages: []
  }
})
@Injectable({providedIn: 'root'})
export class MessagesState {

  @Selector()
  static messages(state: MessagesStateModel) {
    return state.messages;
  }

  @Action(SendMessage)
  sendMessage(
    {
      getState,
      setState,
      dispatch
    }: StateContext<MessagesStateModel>,
    {
      message
    }: SendMessage
  ) {
    const state = getState();
    setState({
      ...state,
      messages: state.messages.concat(message)
    });

    return dispatch(new PublishNotification({
      source: 'Messages::SendMessage',
      title: message.author.username,
      text: message.text,
      picture: message.author.picture,
      data: message,
    }));
  }

}
