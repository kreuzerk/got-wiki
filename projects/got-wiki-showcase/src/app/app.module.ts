import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GotWikiJohnSnowModule} from '../../../got-wiki/src/lib/john-snow/john-snow.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GotWikiJohnSnowModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
