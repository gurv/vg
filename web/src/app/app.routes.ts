import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavigatorComponent} from "./navigator/navigator.component";
import {MetadataComponent} from "./metadata/metadata.component";

export const ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'navigator', component: NavigatorComponent},
  {path: 'metadata', component: MetadataComponent},
  {path: '**', component: NoContentComponent},
];
