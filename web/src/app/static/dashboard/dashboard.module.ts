import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {SharedModule} from "@app/shared";
import {ToolchainModule} from "@app/static/dashboard/toolchain/toolchain.module";
import {MapModule} from "@app/static/dashboard/map/map.module";

@NgModule({
  imports: [CommonModule, SharedModule, ToolchainModule, MapModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
