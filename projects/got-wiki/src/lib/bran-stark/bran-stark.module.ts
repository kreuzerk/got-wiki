import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiBranStarkComponent} from './bran-stark.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiBranStarkComponent],
  exports: [GotWikiBranStarkComponent]
})
export class GotWikiBranStarkModule {
}
