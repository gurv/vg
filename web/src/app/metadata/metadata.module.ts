import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {MetadataComponent} from './metadata.component';

console.log('Bundle `Metadata` асинхронно загружен');

export const routes = [
  {path: '', component: MetadataComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    MetadataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class MetadataModule {

  static routes = routes;

}
