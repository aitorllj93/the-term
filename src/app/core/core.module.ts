import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsPanelComponent } from './notifications/notifications-panel/notifications-panel.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    NotificationsPanelComponent
  ],
  exports: [
    HeaderComponent,
    NotificationsPanelComponent
  ]
})
export class CoreModule { }
