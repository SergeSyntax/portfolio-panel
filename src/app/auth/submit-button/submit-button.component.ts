import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'auth-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss']
})
export class SubmitButtonComponent implements OnInit {
  @Input() inProgress: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
