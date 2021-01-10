
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxModalWindowModule } from 'ngx-modal-window';
import { NgxAsideModule } from 'ngx-aside';
import { environment } from 'src/environments/environment';

import { NotificationsState } from './core/notifications/state/notifications.state';
import { MessagesState } from './messages/state/messages.state';

import { MessagesModule } from './messages/messages.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      NotificationsState,
      MessagesState,
    ], {
      developmentMode: !environment.production
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxModalWindowModule,
    NgxAsideModule,

    CoreModule,
    MessagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
