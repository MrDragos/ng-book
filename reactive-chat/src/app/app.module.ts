import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import {userServiceInjectables} from "./user/user.service";

@NgModule({
  declarations: [
    AppComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [userServiceInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
