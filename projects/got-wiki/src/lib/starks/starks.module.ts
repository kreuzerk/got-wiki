import {NgModule} from '@angular/core';

import {GotWikiAryaStarkModule} from '../arya-stark/arya-stark.module';
import {GotWikiBranStarkModule} from '../bran-stark/bran-stark.module';
import {GotWikiRobbStarkModule} from '../robb-stark/robb-stark.module';
import {GotWikiJohnSnowModule} from '../john-snow/john-snow.module';

import {GotWikiStarksComponent} from './starks.component';

@NgModule({
  imports: [
    GotWikiAryaStarkModule,
    GotWikiBranStarkModule,
    GotWikiRobbStarkModule,
    GotWikiJohnSnowModule
  ],
  declarations: [GotWikiStarksComponent],
  exports: [GotWikiStarksComponent]
})
export class GotWikiStarksModule {
}
