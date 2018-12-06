import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {HttpClientModule} from "@angular/common/http";
import {SpotifyService} from "./search/spotify.service";
import {TrackComponent} from './track/track.component';
import {AuthService} from "./authorization/auth.service";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TrackComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: SpotifyService, useClass: SpotifyService},
    {provide: AuthService, useClass: AuthService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
