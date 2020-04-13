import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {GotWikiStarksModule} from '../../../got-wiki/src/lib/starks/starks.module';
import {GotWikiLannistersModule} from '../../../got-wiki/src/lib/lannisters/lannisters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GotWikiStarksModule,
    GotWikiLannistersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
