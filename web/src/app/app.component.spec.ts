import {
  inject,
  TestBed
} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {AppState} from './app.service';

describe('App', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppState,
      AppComponent
    ]
  }));

  it('should have a url', inject([AppComponent], (app: AppComponent) => {
    expect(app.url).toEqual('https://github.com/gurv/vg');
  }));
});
