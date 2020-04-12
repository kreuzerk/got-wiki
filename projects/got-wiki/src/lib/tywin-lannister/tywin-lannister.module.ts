import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

import {GotWikiTywinLannisterComponent} from './tywin-lannister.component';

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  declarations: [GotWikiTywinLannisterComponent],
  exports: [GotWikiTywinLannisterComponent]
})
export class GotWikiTywinLannisterModule {
}
