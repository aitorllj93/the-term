import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxModalWindowModule } from 'ngx-modal-window';

import { MessagesModule } from './messages/messages.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxModalWindowModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
