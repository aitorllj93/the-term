
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import produce from 'immer';

import { NotificationsService } from 'src/app/core/notifications/notifications.service';
import { DismissNotification, PublishNotification } from './notifications.actions';

import { Notification } from './notification.model';

export class NotificationsStateModel {
  notifications: Array<Notification>;
}

@State<NotificationsStateModel>({
  name: 'notifications',
  defaults: {
    notifications: []
  }
})
@Injectable({providedIn: 'root'})
export class NotificationsState {

  @Selector()
  static notifications(state: NotificationsStateModel) {
    return state.notifications;
  }

  constructor(
    private service: NotificationsService
  ) {}

  @Action(PublishNotification)
  publishNotification(
    {
      setState,
      getState,
      dispatch
    }: StateContext<NotificationsStateModel>,
    {
      notification
    }: PublishNotification
  ) {
    const state = getState();
    const {
      floattingInstance
    } = this.service.publish(notification);
    console.log({
      floattingInstance
    });

    floattingInstance.on('afterClose', () => dispatch(new DismissNotification(notification)));

    setState({
      ...state,
      notifications: state.notifications.concat({
        ...notification,
        floattingInstance: {
          closed: floattingInstance.closed,
          closing: floattingInstance.closing,
          hasSound: floattingInstance.hasSound,
          options: floattingInstance.options,
        }
      })
    });
  }

  @Action(DismissNotification)
  dismissNotification(
    {
      setState,
      getState
    }: StateContext<NotificationsStateModel>,
    {
      notification
    }: DismissNotification
  ) {
    const state = produce(getState(), (draft) => {
      const foundNotification = draft.notifications.find(
        draftNotification => notification.floattingInstance.id === draftNotification.id
      );

      if (!foundNotification) {
        return draft;
      }

      foundNotification.floattingInstance.closed = true;

      this.service.hide(foundNotification.id);

      return draft;
    });

    setState(state);
  }

}
