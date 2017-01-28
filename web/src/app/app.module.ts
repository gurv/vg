import {NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';
import {MaterialModule} from '@angular/material';

import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';

import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {HomeComponent} from './home';
import {NoContentComponent} from './no-content';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NavigatorComponent} from './navigator/navigator.component';

import {CoreModule} from './core/core.module';
import {MetadataModule} from './metadata/metadata.module';
import {AccessModule} from './access/access.module';

import {LayoutDirective} from './core/layout.directive';
import {FlexDirective} from './core/flex.directive';
import {CurrencyModule} from "./currency/currency.module";
import {GoogleChartsModule} from "./shared/google-charts/google-charts.module";
import {MapModule} from "./map/map.module";

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    NoContentComponent,
    DashboardComponent,
    NavigatorComponent,
    LayoutDirective, FlexDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    MaterialModule.forRoot(),

    CoreModule.forRoot({userName: 'Гуринович Владимир'}),
    GoogleChartsModule,
    MetadataModule,
    AccessModule,
    CurrencyModule,
    MapModule
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

  constructor(public appRef: ApplicationRef, public appState: AppState) {
  }

  hmrOnInit(store: StoreType) {
    if (!store || !store.state) return;
    console.log('HMR store', JSON.stringify(store, null, 2));
    this.appState._state = store.state;
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    const state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation);
    store.restoreInputValues = createInputTransfer();
    removeNgStyles();
  }

  hmrAfterDestroy(store: StoreType) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}

