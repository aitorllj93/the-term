
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesAppComponent } from './messages-app/messages-app.component';

@NgModule({
  declarations: [
    MessagesAppComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MessagesAppComponent
  ]
})
export class MessagesModule { }
