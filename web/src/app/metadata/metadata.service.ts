import {Injectable} from '@angular/core';

import {Metadata} from './metadata';
import {METADATA_ARRAY} from './mock-metadata';

@Injectable()
export class MetadataService {

  getMetadataArray(): Promise<Metadata[]> {
    return Promise.resolve(METADATA_ARRAY);
  }

}
