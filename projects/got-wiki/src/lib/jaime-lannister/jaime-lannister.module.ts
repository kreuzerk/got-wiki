import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiJaimeLannisterComponent} from './jaime-lannister.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiJaimeLannisterComponent],
  exports: [GotWikiJaimeLannisterComponent]
})
export class GotWikiJaimeLannisterModule {
}
