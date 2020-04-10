import {NgModule} from '@angular/core';
import {GotWikiJohnSnowComponent} from './john-snow.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [GotWikiJohnSnowComponent],
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [GotWikiJohnSnowComponent]
})
export class GotWikiJohnSnowModule {
}
