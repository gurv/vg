import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {SharedModule} from "@app/shared";
import {ToolchainModule} from "@app/static/dashboard/toolchain/toolchain.module";

@NgModule({
  imports: [CommonModule, SharedModule, ToolchainModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
