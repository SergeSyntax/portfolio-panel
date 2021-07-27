import { Component, OnInit } from '@angular/core';
import { NavOption } from './nav-option';

@Component({
  selector: 'dashboard-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navOptions: NavOption[] = [
    { path: '/dashboard', name: 'Charitable Project Requests' },
    { path: '/dashboard', name: 'Profitable ProjectRequests' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
