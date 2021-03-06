import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiJohnSnowComponent} from './john-snow.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiJohnSnowComponent],
  exports: [GotWikiJohnSnowComponent]
})
export class GotWikiJohnSnowModule {
}
