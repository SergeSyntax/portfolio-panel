import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  menu = false;
  isSmallScreen: boolean = false;

  constructor(private authService: AuthService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe('(min-width: 1200px)').subscribe(value => {
      this.isSmallScreen = value.matches;
    });
  }

  openMenu() {
    this.menu = true;
  }

  logout() {
    this.authService.logout();
  }
}
