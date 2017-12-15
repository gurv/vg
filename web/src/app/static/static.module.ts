import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [AboutComponent, DashboardComponent]
})
export class StaticModule {}
