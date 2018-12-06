import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http-component/simple-http.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { SearchBoxComponent } from './search-box/search-box.component';

import {youtubeSearchInjectables} from "./youtube-search/youtube-search.injectables";
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [youtubeSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
