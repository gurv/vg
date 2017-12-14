import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { StaticRoutingModule } from './static-routing.module';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
})
export class StaticModule {}
