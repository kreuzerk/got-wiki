import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiRobbStarkComponent} from './robb-stark.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiRobbStarkComponent],
  exports: [GotWikiRobbStarkComponent]
})
export class GotWikiRobbStarkModule {
}
