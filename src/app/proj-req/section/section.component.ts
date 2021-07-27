import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'proj-req-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() title: string = '';
  @Input() data: string = '';
}
