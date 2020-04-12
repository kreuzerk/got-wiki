import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiTyrionLannisterComponent} from './tyrion-lannister.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiTyrionLannisterComponent],
  exports: [GotWikiTyrionLannisterComponent]
})
export class GotWikiTyrionLannisterModule {
}
