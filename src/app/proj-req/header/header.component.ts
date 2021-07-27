import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

interface ProjectRequest {
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

interface MatMenuItem {
  title: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'proj-req-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() projectRequest!: ProjectRequest;
  constructor() {}
  matMenuItems: MatMenuItem[] = [{ title: 'delete', icon: 'delete', url: '' }];
  ngOnInit(): void {}

  getRelativeTime(date: string) {
    const d = Date.parse(date);
    return moment(d).fromNow();
  }
}
