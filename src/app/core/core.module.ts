import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsPanelComponent } from './notifications/notifications-panel/notifications-panel.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NotificationsPanelComponent
  ],
  exports: [
    NotificationsPanelComponent
  ]
})
export class CoreModule { }
