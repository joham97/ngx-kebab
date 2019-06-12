import { Component, Input } from '@angular/core';

@Component({
  selector: 'kebab',
  templateUrl: './ngx-kebab.component.html',
  styleUrls: ['./ngx-kebab.component.css']
})
export class KebabComponent {

  @Input('size') size: 'small' | 'medium' | 'large';

  constructor() { }

}
