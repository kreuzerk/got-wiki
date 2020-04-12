import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiCerseiLannisterComponent} from './cersei-lannister.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiCerseiLannisterComponent],
  exports: [GotWikiCerseiLannisterComponent]
})
export class GotWikiCerseiLannisterModule {
}
