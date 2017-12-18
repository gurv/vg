import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';
import {ToolchainComponent} from './toolchain/toolchain.component';
import {SharedModule} from "@app/shared";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DashboardComponent, ToolchainComponent]
})
export class DashboardModule {
}
