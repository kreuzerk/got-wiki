import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiAryaStarkComponent} from './arya-stark.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiAryaStarkComponent],
  exports: [GotWikiAryaStarkComponent]
})
export class GotWikiAryaStarkModule {
}
