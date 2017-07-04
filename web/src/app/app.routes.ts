import {Routes} from '@angular/router';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from "./login/login.component";

export const ROUTES: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NoContentComponent},
];
