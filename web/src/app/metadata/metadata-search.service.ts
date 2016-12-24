import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {Metadata} from './metadata';

@Injectable()
export class MetadataSearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<Metadata[]> {
    return this.http
      .get(`app/metadata/?code=${term}`)
      .map((r: Response) => r.json().data as Metadata[]);
  }

}
