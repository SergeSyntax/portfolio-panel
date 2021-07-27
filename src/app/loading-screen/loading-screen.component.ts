import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnDestroy {
  constructor() {}
  ngOnDestroy(): void {}

  ngOnInit(): void {}
}
