import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-col-simple',
  templateUrl: './col-simple.component.html',
  styleUrls: ['./col-simple.component.scss']
})
export class ColSimpleComponent {
  @Input() data!: string;
}
