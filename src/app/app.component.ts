import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import { delay, take } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: ComponentRef<LoadingScreenComponent>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private authService: AuthService,
    private viewContainerRef: ViewContainerRef
  ) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(LoadingScreenComponent);
    this.loading = this.viewContainerRef.createComponent<LoadingScreenComponent>(componentFactory);
  }

  ngOnInit(): void {
    this.authService.checkAuth();
    this.authService.loading$.pipe(delay(500), take(1)).subscribe(() => this.stopLoading());
  }

  stopLoading(): void {
    this.loading.destroy();
  }
}
