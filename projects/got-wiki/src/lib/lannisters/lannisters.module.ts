import {NgModule} from '@angular/core';

import {GotWikiJaimeLannisterModule} from '../jaime-lannister/jaime-lannister.module';
import {GotWikiCerseiLannisterModule} from '../cersei-lannister/cersei-lannister.module';
import {GotWikiTyrionLannisterModule} from '../tyrion-lannister/tyrion-lannister.module';
import {GotWikiTywinLannisterModule} from '../tywin-lannister/tywin-lannister.module';

import {GotWikiLannistersComponent} from './lannisters.component';

@NgModule({
  imports: [
    GotWikiCerseiLannisterModule,
    GotWikiJaimeLannisterModule,
    GotWikiTyrionLannisterModule,
    GotWikiTywinLannisterModule
  ],
  declarations: [GotWikiLannistersComponent],
  exports: [GotWikiLannistersComponent]
})
export class GotWikiLannistersModule {
}
