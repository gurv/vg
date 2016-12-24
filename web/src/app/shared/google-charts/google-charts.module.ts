import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";

import {GoogleChartsLoaderService} from "./google-charts-loader.service";

@NgModule({
  imports: [CommonModule],
  providers: [GoogleChartsLoaderService]
})
export class GoogleChartsModule {
}
