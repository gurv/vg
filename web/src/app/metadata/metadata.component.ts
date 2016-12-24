import {Component, OnInit} from '@angular/core';

import {Metadata} from './metadata';
import {MetadataService} from './metadata.service';

@Component({
  selector: 'vg-metadata',
  templateUrl: './metadata.component.html',
  styleUrls: ['metadata.component.css'],
  providers: [MetadataService]
})
export class MetadataComponent implements OnInit {

  metadataArray: Metadata[];
  selectedMetadata: Metadata;

  constructor(private metadataService: MetadataService) {
  }

  getMetadataArray(): void {
    this.metadataService.getMetadataArray().then(metadataArray => this.metadataArray = metadataArray);
  }

  ngOnInit(): void {
    console.log('Инициализация компоненты `Metadata`');
    this.getMetadataArray();
  }

  onSelect(metadata: Metadata): void {
    this.selectedMetadata = metadata;
  }

}
