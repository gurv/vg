import {Component} from '@angular/core';
import {Metadata}    from './metadata';

@Component({
  moduleId: module.id,
  selector: 'metadata-form',
  templateUrl: 'metadata-form.component.html'
})
export class HeroFormComponent {

  model = new Metadata(1, 'TYPE_1', 'Type 1', null);
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.model);
  }

}
