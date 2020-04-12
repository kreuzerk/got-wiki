import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GotWikiJohnSnowModule} from '../../../got-wiki/src/lib/john-snow/john-snow.module';
import {GotWikiAryaStarkModule} from '../../../got-wiki/src/lib/arya-stark/arya-stark.module';
import {GotWikiBranStarkModule} from '../../../got-wiki/src/lib/bran-stark/bran-stark.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GotWikiJohnSnowModule,
        GotWikiAryaStarkModule,
        GotWikiBranStarkModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
