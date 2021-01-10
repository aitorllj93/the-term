import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { NotificationsState } from '../state/notifications.state';
import { Notification } from '../state/notification.model';

export enum ActiveTab {
  UNREAD = 'unread',
  ARCHIVED = 'archived',
}

@Component({
  selector: 'app-notifications-panel',
  templateUrl: './notifications-panel.component.html',
  styleUrls: ['./notifications-panel.component.scss']
})
export class NotificationsPanelComponent implements OnInit {

  static ActiveTab = ActiveTab;

  activeTabTypes = NotificationsPanelComponent.ActiveTab;

  activeTab = ActiveTab.UNREAD;

  @Select(NotificationsState.notifications) notifications$: Observable<Notification[]>;

  ngOnInit(): void {
  }

  selectUnreadTab() {
    this.activeTab = ActiveTab.UNREAD;
  }

  selectArchivedTab() {
    this.activeTab = ActiveTab.ARCHIVED;
  }

}
