import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'proj-req-indications',
  templateUrl: './indications.component.html',
  styleUrls: ['./indications.component.scss']
})
export class IndicationsComponent {
  @Input() isFunded!: boolean;
  @Input() communityOrProfit!: string;
}
